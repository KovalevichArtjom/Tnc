<template>
    <ScheduleGrid :data="scheduleData"
                  :columns="scheduleModel">
    </ScheduleGrid>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import ScheduleGrid from './components/ScheduleGrid.vue'
    import { useScheduleStore } from '@/store';

    export default defineComponent({
        name: 'App',
        components: { ScheduleGrid },
        setup() {
            const scheduleStore = useScheduleStore();
            const scheduleModel = ['id', 'userId', 'numberWorkPlaceId', 'fromDate', 'toDate', 'description']
            const scheduleData = scheduleStore.fetchDefaultSchedules().then((record) => {
                console.log(record);
            })

            console.log(scheduleData);

            return {
                scheduleModel,
                scheduleData
            };
        },
    });
</script>