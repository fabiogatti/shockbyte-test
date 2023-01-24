<template>
    <VueApexCharts :height="height" :options="chartOptions" :series="series" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
    eggs:{
        required: true,
        type: Object,
    },
    birds:{
        required: true,
        type: Object,
    },
});

const height = ref(window.innerHeight-352);

const series = computed(() => {
    return [props.eggs, props.birds];
});

window.addEventListener('resize',()=>{
    height.value = window.innerHeight - 352;
});

const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const chartOptions =  {
    chart: {
        type: 'area',
        toolbar: {
            show: false,
        }
    },
    colors: ['#0E9CFF', '#744F99'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1.5,
        curve: 'smooth'
    },
    fill: {
        opacity: 0.2,
        type: 'solid',
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    tooltip:{
        theme: 'dark'
    },
    grid: {
        show: true,
        position: 'back',
        strokeDashArray: 4,
        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: true,
            }
        },
    },
    yaxis: {
        type: 'number',
        labels:{
            style:{
                colors:'rgba(255,255,255,0.6)',
                fontSize:12,
                fontWeight:400,
                fontFamily: 'Inter',
            }
        }
    },
    xaxis: {
        labels: {
            formatter: function (dateString:string) {
                const date = new Date(dateString);
                let day = date.getDay();
                day == 0 ? day = 6 : day--;
                
                return daysInWeek[day];
            },
            style:{
                colors:'rgba(255,255,255,0.6)',
                fontSize:12,
                fontWeight:400,
                fontFamily: 'Inter',
            }
        },
    },
    markers: {
        size: 5,
        strokeWidth: 0,
        shape: 'circle',
        showNullDataPoints: true,
    },
};
</script>