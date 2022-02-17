type stateType = {
    vacance: {
        title: string,
        price: number,
        skills: Array<string>,
        isDistantWork: boolean
    }
}

const StateInit: stateType = {
    vacance: {
        price:800,
        skills:["ts"],
        title:"Full-Stack senior developer",
        isDistantWork: true
    }
}

export const vacance = (state = StateInit, action: any) => {
    let stateCopy = { ...state }
    return stateCopy
}