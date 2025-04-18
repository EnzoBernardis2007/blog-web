import { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import CardLogProps from "../../utils/interfaces"
import styles from './ListLogs.module.sass'
import { CardLog } from "../../components/CardLog/CardLog"

export function ListLogs() {
    const { request } = useApi()
    const [logs, setLogs] = useState<CardLogProps[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getAllLogs = async () => {
            try {
                setLoading(true)
                const response = await request<CardLogProps[]>('get', '/logs')
                setLogs(response || [])
            } catch (err) {
                setError("Failed to load logs")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        getAllLogs()
    }, [])

    const Container = ({ children }: { children: React.ReactNode }) => {
        return (
            <main className={styles.container}>
                {children}
            </main>
        )
    }

    if (loading) return (
        <Container>
            <p>Loading...</p>
        </Container>
    )
    
    if (error) return (
        <Container>
            <p>{error}</p>
        </Container>
    )

    return (
        <Container>
            <div className={styles.gridLogs}>
                {logs.length > 0 ? (
                    logs.map((log) => (
                        <CardLog 
                            key={log.id}
                            {...log}
                        />
                    ))
                ) : (
                    <p>No logs found</p>
                )}
            </div>
        </Container>
    )
}