import StockCircle from "./circle";
import styles from "./table.module.css";
function StockTable({data}) {
    return (
        <>
        {data.map(val => (
            <tr key={val.store.name}>
                <StockCircle data={val} />
                <td>{val.store.name}</td>
                <td>{val.stock}</td>
                <td>{val.store.buCode}</td>
            </tr>
        ))}
        </>
    )
}
export default function Table({data}) {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                        <th>Indicator</th>
                        <th>Store</th>
                        <th>Amount</th>
                        <th>Store BuCode</th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                <StockTable data={data} />
            </tbody>
        </table>
    )
}