<template>
    <form id="search">
        Search <input name="query" v-model="searchQuery">
    </form>
    <ScheduleGrid :data="scheduleData"
                  :columns="scheduleModel"
                  :filter-key="searchQuery">
    </ScheduleGrid>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import ScheduleGrid from './components/ScheduleGrid.vue'
    import { useScheduleStore } from '@/store';

    export default defineComponent({
        name: 'App',
        components: { ScheduleGrid },
        setup() {
            const scheduleStore = useScheduleStore();
            const searchQuery = ref('')
            const scheduleModel = ['id', 'userId', 'numberWorkPlaceId', 'fromDate', 'toDate', 'description']
            const scheduleData = scheduleStore.fetchDefaultSchedules()

            return {
                searchQuery,
                scheduleModel,
                scheduleData
            };
        },
    });
</script>