const FILLFIRSTFORM = "FILLFIRSTFORM"

interface firstForm {
    firstname?: string,
    lastname?: string,
    namber?: string,
    data?: string
}

interface form {
    firststep: firstForm,
    laststep: {}
}

let formState: form = {
    firststep: {},
    laststep: {}
}

interface FillFirstFormACType {
    type: "FILLFIRSTFORM",
    form: firstForm
}

type actionType = FillFirstFormACType

export const FillFirstFormAC = (form: firstForm): FillFirstFormACType => {
    console.log({ type: FILLFIRSTFORM, form })
    return { type: FILLFIRSTFORM, form }
}

const form = (state = formState, action: actionType) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case "FILLFIRSTFORM":
            if(!action.form.data){action.form.data = ""}
            stateCopy.firststep = action.form
            return stateCopy
        default:
            return stateCopy
    }
}

export default form