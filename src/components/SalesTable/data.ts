import { DataRow } from "../../types/data";

export const salesData = [
  { company: { name: 'Company A', area: 'Revenue' }, updatedAt: '1 day ago', growth: { main: 55.5, mainUnit: '%', sub: 1.5, period: '7D Y/Y' }, qtdEst: { main: 12.3, mainUnit: '%', sub: -1.0, period: 'Y/Y' }, qtdVsVa: undefined },
  { company: { name: 'Company B', area: 'Sales' }, updatedAt: '04/17/24', growth:  { main: -55.5, mainUnit: '%', sub: -4.18, period: '7D Y/Y' }, qtdEst: { main: -12.3, mainUnit: '%', sub: -5.5, period: 'Y/Y' }, qtdVsVa: { main: 0.4, mainUnit: 'pp', sub: 0.0, period: 'Y/Y' } },
  { company: { name: 'Company C', area: 'Revenue' }, updatedAt: '2 days ago', growth:  { main: -55.5, mainUnit: '%', sub: -2.2, period: '7D Y/Y' }, qtdEst: { main: -12.3, mainUnit: '%', sub: -0.37, period: 'Y/Y' }, qtdVsVa: { main: 2.2, mainUnit: 'pp', sub: 9.6, period: 'Y/Y' } },
  { company: { name: 'Company C', area: 'Sales' }, updatedAt: '2 days ago', growth:  { main: -55.5, mainUnit: '%', sub: -1.0, period: '7D Y/Y' }, qtdEst: { main: -12.3, mainUnit: '%', sub: -1.9, period: 'Y/Y' }, qtdVsVa: undefined },
  { company: { name: 'Company D', area: 'Sales' }, updatedAt: '2 days ago', growth:  { main: -55.5, mainUnit: '%', sub: -0.18, period: '7D Y/Y' }, qtdEst: { main: 12.3, mainUnit: '%', sub: -2.3, period: 'Y/Y' }, qtdVsVa: undefined },
] as DataRow[];
