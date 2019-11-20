import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
} from "bizcharts";
import DataSet from "@antv/data-set";

class Basic extends React.Component {
    render() {
        const data = [
            {
                country: "中国",
                population: 131744
            },
            {
                country: "印度",
                population: 104970
            },
            {
                country: "美国",
                population: 29034
            },
            {
                country: "印尼",
                population: 23489
            },
            {
                country: "巴西",
                population: 18203
            },
            {
                country: "巴西",
                population: 18203
            },
            {
                country: "巴西SA",
                population: 18203
            },  {
                country: "巴西sa",
                population: 18203
            }
            ,  {
                country: "巴西aa",
                population: 18203
            }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.source(data).transform({
            type: "sort-by",
            fields: [ 'population' ],
            order: 'ASC'
        });
        return (
            <div>
                <Chart height={400} data={dv} forceFit>
                    <Coord transpose />
                    <Axis
                        name="country"
                        label={{
                            offset: 12
                        }}
                    />
                    <Axis name="population" />
                    <Tooltip />
                    <Geom type="interval" position="country*population" />
                </Chart>
            </div>
        );
    }
}

export default Basic;
