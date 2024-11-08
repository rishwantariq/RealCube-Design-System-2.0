const fs = require('fs')
const path = require('path')
const readline = require('readline')
const { execSync } = require('child_process')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const askUser = (question) =>
    new Promise((resolve) => rl.question(question, resolve))

// Get the target project path from the command line arguments
const targetPath = process.argv[2]

if (!targetPath) {
    console.error('Please provide a target path.')
    process.exit(1)
}

// Directories to copy from the design-system project
const directoriesToCopy = [
    'src/components',
    'src/hooks',
    'src/lib',
    'src/styles',
]

;(async () => {
    for (const dir of directoriesToCopy) {
        const sourceDir = path.join(__dirname, dir)
        const targetDir = path.join(targetPath, dir)

        if (!fs.existsSync(sourceDir)) {
            console.warn(
                `Source directory ${dir} does not exist in the design system project.`,
            )
            continue
        }

        // Check if the target directory already exists
        if (fs.existsSync(targetDir)) {
            // Prompt user for action if directory exists
            const answer = await askUser(
                `Directory ${dir} already exists in the target project. Overwrite (o), Skip (s), or Merge (m)? `,
            )

            if (answer.toLowerCase() === 'o') {
                // Delete the existing directory before copying
                fs.rmSync(targetDir, { recursive: true, force: true })
                console.log(`Overwriting ${dir}...`)
            } else if (answer.toLowerCase() === 's') {
                console.log(`Skipping ${dir}.`)
                continue
            } else if (answer.toLowerCase() === 'm') {
                console.log(`Merging contents of ${dir}...`)
            } else {
                console.log('Invalid option. Skipping by default.')
                continue
            }
        }

        // Create target directory if it doesn't exist
        fs.mkdirSync(path.dirname(targetDir), { recursive: true })

        // Copy or merge directory recursively
        copyDirectory(sourceDir, targetDir)
        console.log(`Copied ${dir} to target project.`)
    }

    // Close readline interface
    rl.close()

    // Install dependencies in the target project
    console.log('Installing dependencies in the target project...')
    execSync('npm install', { cwd: targetPath, stdio: 'inherit' })
    console.log('Dependencies installed successfully.')
})()

// Function to copy a directory recursively
function copyDirectory(source, destination) {
    fs.readdirSync(source).forEach((item) => {
        const sourcePath = path.join(source, item)
        const destinationPath = path.join(destination, item)

        if (fs.statSync(sourcePath).isDirectory()) {
            if (!fs.existsSync(destinationPath)) {
                fs.mkdirSync(destinationPath, { recursive: true })
            }
            copyDirectory(sourcePath, destinationPath)
        } else {
            fs.copyFileSync(sourcePath, destinationPath)
        }
    })
}
