import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
// import Rightbar from "../ui/dashboard/rightbar/rightbar";
import { fetchReferral } from "../lib/data";

const Dashboard = async () => {
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
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
        </div>
        <Chart data69={data2} />
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;