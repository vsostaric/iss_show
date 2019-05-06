import React, {Component} from 'react';
import PropTypes from "prop-types";
import rd3 from 'react-d3-library';
import "./meteor.data.css"
import * as d3 from "d3";

class MeteorData extends Component {

    constructor(props, context) {
        super(props, context);
        this.props.refreshMeteorData();
    }

    componentDidMount() {
        this.drawBarChart();
    }

    render() {

        return (
            <div className="layout">
                <div className="container">
                    <svg/>
                </div>
            </div>
        );
    }

    drawBarChart() {

        const svgWidth = 500;
        const svgHeight = 300;
        const svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "bar-chart");

        const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

        const barPadding = 5;
        const barWidth = (svgWidth / dataset.length);
        const barChart = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("y", function (d) {
                return svgHeight - d
            })
            .attr("height", function (d) {
                return d;
            })
            .attr("width", barWidth - barPadding)
            .attr("transform", function (d, i) {
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });

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
    refreshMeteorData: PropTypes.func.isRequired
};

export default MeteorData
