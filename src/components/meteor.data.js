import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./meteor.data.css"
import * as d3 from "d3";

class MeteorData extends Component {

    constructor(props, context) {
        super(props, context);
        this.props.refreshMeteorData();
    }

    componentDidUpdate() {
        this.drawBarChart();
    }

    render() {

        return (
            <div id='layout'>
                <div id='container'>
                    <svg/>
                </div>
            </div>
        );
    }

    drawBarChart() {

        const margin = 60;
        const width = 1000 - 2 * margin;
        const height = 600 - 2 * margin;

        const svg = d3.select('svg');

        const chart = svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`);

        const yMargin = this.props.maxCount * 0.2;
        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, this.props.maxCount + yMargin]);

        chart.append('g')
            .call(d3.axisLeft(yScale));

        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(this.props.meteor_year_groups.map((s) => s.year))
            .padding(0.2);

        chart.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(
                d3.axisBottom(xScale).tickValues(xScale.domain().filter(function (d, i) {
                    return !(i % 10)
                }))
            );

        const {closestYear} = this.props;

        chart.selectAll()
            .data(this.props.meteor_year_groups)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.year))
            .attr('y', (s) => yScale(s.count))
            .attr('height', (s) => height - yScale(s.count))
            .attr('width', xScale.bandwidth())
            .attr("font-size", 8)
            .attr("class", function (d, i) {
                return d.year === closestYear ? "bar_Pashtun" : ""
            })

    }
}

MeteorData.propTypes = {
    meteor_data: PropTypes.arrayOf(PropTypes.shape({
        fall: PropTypes.string,
        geolocation: PropTypes.shape({
            type: PropTypes.string,
            coordinates: PropTypes.arrayOf(PropTypes.number)
        }),
        id: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
        nametype: PropTypes.string,
        recclass: PropTypes.string,
        reclat: PropTypes.string,
        reclong: PropTypes.string,
        year: PropTypes.string,
    })),
    meteor_year_groups: PropTypes.array,
    refreshMeteorData: PropTypes.func.isRequired
};

export default MeteorData
