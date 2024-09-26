<script setup>
  import { ref } from 'vue';
  import { Chart as ChartJS, ArcElement, Title, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { Bar } from 'vue-chartjs'
  import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the datalabels plugin
  ChartJS.register(CategoryScale, ArcElement, LinearScale, BarElement, Title, Legend, ChartDataLabels)

  const props = defineModel('data', { type: Object })
  const data = props.value;

const barObj = {
    type:'horizontalBar',
      data: data,
      options: {
        responsive: true,
         maintainAspectRatio :false, //그래프의 비율 유지 
        indexAxis: 'y',
         barThickness: 15, 
        maxBarThickness: 15,
        
        scales: {
            x: {
              display: false,
              stacked: true,
               grid: {
                display: false,  // Hide the Y-axis grid lines
              },
              border: {
                display: false,  // Hide the Y-axis line
              },              
            },
            y: {
              stacked: true,
              beginAtZero: true,
              ticks: {
                color: '#111518', // Customize the Y-axis font color here
              },
               grid: {
                display: false,  // Hide the Y-axis grid lines
              },
              border: {
                display: false,  // Hide the Y-axis line
              },
              
            }
        },
         plugins:{
              legend: {
                  display: false
              },
              
              datalabels: {
                color: '#fff', 
                anchor: 'center', 
                align: 'center', 
                formatter: function (value, opts) {
                  let i = opts.dataIndex;
                  if(opts.dataset.dataLabel) value = opts.dataset.dataLabel[i];
                  return value ;
                },
                font: {
                  size: 11,
                  lineHeight: 1.5
                },
              },
          }
      }
    }

</script>

<template>
      <template v-if="data">
        <div class="bar-chart">
          <Bar :data="barObj.data" :options="barObj.options" />
        </div>
        <div class="legend wide">
          <span v-for="(item, i) in data.datasets" :key="i" ><i :style="`background:${item.backgroundColor}`"></i>{{ item.label }}</span>
        </div>
      </template>
      <div v-else class="no-chart-data">
        분석 결과가 없습니다
      </div>
</template>
