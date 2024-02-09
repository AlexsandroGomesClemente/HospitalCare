export interface DashboardList {
    image: string,
    text: string,
    action: () => Response |void,
}


export interface DashboardConfigList {
    config: DashboardList[]
}

export interface ConfigInicial {
    configInicial?: string,
}

export interface DashboardTypeMain {
    type: ConfigInicial
}

export interface DashboardMain {
    title: string,
    breadcumb: string,
    type: string
}

export interface DashboardForm {
    title: string,
    breadcumb: string,
    type: string,
}

export interface DashboardMainHeader {
    title:string,
    breadcumb:string
}

export interface DashboardMainConfig {
    config:DashboardMain
}

export interface TableProps {
    tableHeader: string[]
}