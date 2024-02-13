export interface ListPersonProps {
    id: number;
    email: string;
    fullName: string;
    cityId: number;

}

export interface DetailPerson {
    id: number;
    email: string;
    fullName: string;
    cityId: number;
}

export type TotalCountPerson = {
    data: ListPersonProps[];
    totalCount: number;
}