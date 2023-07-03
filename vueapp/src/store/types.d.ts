export type ISchedule = {
    id: number;
    userId: number;
    numberWorkPlaceId: number;
    fromDate: Date;
    toDate: Date;
    description: string
};

export type IScheduleStoreState = {
    schedule: Array<ISchedule>
}