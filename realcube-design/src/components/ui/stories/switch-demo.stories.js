import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Label } from '../label'
import { Switch } from '../switch'
var meta = {
    title: 'RealCube/switch',
    component: function () {
        return _jsxs('div', {
            className: 'flex items-center space-x-2',
            children: [
                _jsx(Switch, { id: 'airplane-mode' }),
                _jsx(Label, {
                    htmlFor: 'airplane-mode',
                    children: 'Airplane Mode',
                }),
            ],
        })
    },
    parameters: {
        layout: 'centered',
    },
}
export default meta
export var SwitchDemo = {
    args: {},
}
