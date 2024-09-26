<script setup>
  import { ref } from 'vue';
  import { Chart as ChartJS, ArcElement, Title, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the datalabels plugin
  ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Legend, ChartDataLabels)

  const props = defineModel('data', { type: Object })
  const data = props.value;


const donutObj = {
      data: data,
      options: {
        responsive: true,
          cutout: '70%',
         maintainAspectRatio :false, //그래프의 비율 유지 
         plugins:{
              legend: {
                  display: false
              },
              datalabels: false,
          }
      }
    }
</script>

<template>
    <template v-if="data">
      <div class="donut-chart">
        <Doughnut :data="donutObj.data" :options="donutObj.options" />
      </div>
      <div class="legend">
        <span v-for="(item, i) in data.labels" :key="i" ><i :style="`background:${data.datasets[0].backgroundColor[i]}`"></i>{{ item }}</span>
      </div>
    </template>

      <div v-else class="no-chart-data">
        분석 결과가 없습니다
      </div>    
</template>

