import styles from './page.module.css'
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar/>
      <Dashboard/>
    </main>
  )
}
