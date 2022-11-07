import {$authHost, $host} from "./index";


export const createTeamMember = async (team_member) => {
    const {data} = await $authHost.post('team', team_member)
    return data
}


export const fetchTeamMember = async () => {
    const {data} = await $host.get('team')
    return data
}

export const updateTeamMember = async (id, team_member) => {
    const {data} = await $authHost.put(`team/${id}`, team_member)
    return data
}

export const deleteTeamMember = async (id) => {
    const {data} = await $authHost.delete(`team/${id}`)
    return data
}