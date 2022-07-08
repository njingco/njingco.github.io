import * as action from "./types"
import store from "../store"

export const toggleNav = () => ({
    type:action.TOGGLE_NAV_STATUS
})

export const setNavstatus = (status:boolean) => ({
    type:action.SET_NAV_STATUS,
    status:status
})