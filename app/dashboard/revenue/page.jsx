import { fetchReferral } from "@/app/lib/data";
import styles from '@/app/ui/dashboard/dashboard.module.css'
import Chart2 from "../../ui/dashboard/chart/chart2";

const RevenuePage =  async () =>{
    const {selfReferrals,googleReferrals,varunTReferrals,chetanTReffarls,madhavTReffarls,othersReffarls} = await fetchReferral()
    const data2 = [
      { name: 'Group A', value: selfReferrals },
      { name: 'Group B', value: googleReferrals },
      { name: 'Group C', value: varunTReferrals },
      { name: 'Group D', value: chetanTReffarls },
      { name: 'Group E', value: madhavTReffarls },
      { name: 'Group F', value: chetanTReffarls },
      { name: 'Group G', value: othersReffarls },
    ];
  return (
    
    <div>
        <Chart2 data69={data2} />
    </div>
  )
}
export default RevenuePage