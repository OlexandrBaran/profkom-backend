import {$authHost, $host} from "./index";


export const createTeamMember = async (team_member) => {
    console.log(team_member.get("email") );
    const {data} = await $authHost.post('team', team_member)
    return data
}


export const fetchTeamMember = async () => {
    const {data} = await $host.get('team')
    return data
}