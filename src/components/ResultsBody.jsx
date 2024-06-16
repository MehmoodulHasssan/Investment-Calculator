import { formatter } from "../util/investment"

export default function ResultsBody(datas) {
    return (
        <tbody>
            {
                datas.datas.map((data) => (
                    <tr key={(datas.datas.indexOf(data))}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(data.total)}</td>
                        <td>{formatter.format(data.valueEndOfYear - data.total)}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}