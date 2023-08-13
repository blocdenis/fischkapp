import styles from './AppLayout.module.css'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => (
  <div className={styles.layout}>{children}</div>
)
