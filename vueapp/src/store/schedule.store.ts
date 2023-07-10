import { defineStore } from 'pinia';
import {
    IScheduleStoreState,
    ISchedule
} from '@/store/types';

export const useScheduleStore = defineStore('schedule', {
    state: (): IScheduleStoreState => ({
        schedule: [{
            id: 0,
            userId: 0,
            numberWorkPlaceId: 0,
            fromDate: new Date(),
            toDate: new Date(),
            description: ''
        }]
    }),
    getters: {
        getSchedules(state: IScheduleStoreState) {
            return state;
        }
    },
    actions: {
        async fetchDefaultSchedules(): Promise<Array<ISchedule>> {
            const records = [
                {
                    id: 1,
                    userId: 1,
                    numberWorkPlaceId: 1,
                    fromDate: new Date('2022-07-03 03:11:47'),
                    toDate: new Date('2022-07-04 03:11:47'),
                    description: 'Test description UserId 1'
                },
                {
                    id: 2,
                    userId: 2,
                    numberWorkPlaceId: 2,
                    fromDate: new Date('2022-04-03 03:11:47'),
                    toDate: new Date('2022-04-04 03:11:47'),
                    description: 'Test description UserId 2'
                },
                {
                    id: 3,
                    userId: 1,
                    numberWorkPlaceId: 1,
                    fromDate: new Date('2022-03-03 03:11:47'),
                    toDate: new Date('2022-03-04 03:11:47'),
                    description: 'Test description UserId 1'
                },
                {
                    id: 4,
                    userId: 3,
                    numberWorkPlaceId: 2,
                    fromDate: new Date('2022-01-03 03:11:47'),
                    toDate: new Date('2022-01-04 03:11:47'),
                    description: 'Test description UserId 3'
                }
            ]

            return records;
        }
    }
});