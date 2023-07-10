<template>
    <thead>
        <tr>
            <th v-for="key in columns">
                {{ capitalize(key) }}
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="{ value, id } in scheduleStore" :key="id">
            <td> {{ value.Id }} </td>
            <td> {{ value.userId }} </td>
            <td> {{ value.numberWorkPlaceId }} </td>
            <td> {{ value.fromDate }} </td>
            <td> {{ value.toDate }} </td>
            <td> {{ value.description }} </td>
        </tr>
    </tbody>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ScheduleGrid',
        props: {
            data: { type: Array, required: true },
            columns: { type: Array, required: true }
        },
        setup(props) {
            const scheduleStore = props.data

            return {
                scheduleStore
            }
        },
        methods: {
            capitalize(str: string) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        }
    });
</script>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>