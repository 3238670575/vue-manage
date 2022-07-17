import  Mock from "mockjs"  
import homeApi from './Mock/home' 


Mock.mock('/home/getData',homeApi.getStatisticalData())