' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

@connect((store) => {
  console.log("store inside graph: ", store)
  return {
    weekData: store.weekData,
    graphOptions: store.graphOptions,
  };
})

export default class Graph extends React.Component {
  // componentDidUpdate() {    
  //   console.log('this.props.data: ', this.props.data);
  // }

  componentDidMount() {
    let data = this.props.graphOptions;
    console.log("data from graph------: ", data);

   // console.log("GRAPH DATA", this.props.graphOptions)

    // let data = [{
    // date: '20161018',
    // domains: [{ domain: 'learn.makerpass.com', visits: 103 },
    //             { domain: 'repl.it', visits: 100 },
    //             { domain: 'allData', visits: 211 }],
    // },
    // { date: '20161019',
    //   domains: [{ domain: 'learn.makerpass.com', visits: 78 },
    //             { domain: 'repl.it', visits: 57 },
    //             { domain: 'allData', visits: 200 }],
    // },
    // { date: '20161020',
    //   domains: [{ domain: 'learn.makerpass.com', visits: 35 },
    //             { domain: 'repl.it', visits: 100 },
    //             { domain: 'allData', visits: 150 }],
    // },
    // { date: '20161021',
    //   domains: [{ domain: 'learn.makerpass.com', visits: 250 },
    //             { domain: 'repl.it', visits: 50 },
    //             { domain: 'allData', visits: 99 }],
    // },
    // { date: '20161022',
    //   domains: [{ domain: 'learn.makerpass.com', visits: 45 },
    //             { domain: 'repl.it', visits: 55 },
    //            { domain: 'allData', visits: 106 }],
    // },
    // { date: '20161023',
    //   domains: [{ domain: 'learn.makerpass.com', visits: 200 },
    //             { domain: 'repl.it', visits: 90 },
    //             { domain: 'allData', visits: 200 }],
    // },
    // { date: '20161024',
    //   domains: [{ domain: 'learn.makerpass.com', visits: 20 },
    //             { domain: 'repl.it', visits: 17 },
    //             { domain: 'haveibeenpwned.com', visits: 20 },
    //             { domain: 'redux.js.org', visits: 21 },
    //             { domain: 'v4-alpha.getbootstrap.com', visits: 20 },
    //             { domain: 'getbootstrap.com', visits: 13 },
    //             { domain: 'npmjs.com', visits: 11 }],
    //   count: 122,
    // }]
    // console.log('chart data', data);


    //======== ALL DOMAINS =========
    const startDate = {
      'year': Number(data[0].date.slice(0, 4)),
      'month': Number(data[0].date.slice(4, 6)),
      'date': Number(data[0].date.slice(6))
    }

    const endDate = {
      'year': Number(data[data.length - 1].date.slice(0, 4)),
      'month': Number(data[data.length - 1].date.slice(4, 6)),
      'date': Number(data[data.length - 1].date.slice(6))
    }


    let totalDomainCount = [];
    let dates = [];
    for (const day of data) {
      dates.push(new Date(day.date.slice(0, 4), day.date.slice(4, 6), day.date.slice(6)));
      for (const domain of day.domains) {
        totalDomainCount.push(domain.visits);
      }
    }


    //MAX AND MIN VALUES FOR Y AXIS
    const max = Math.max(...totalDomainCount);
    const min = Math.min(...totalDomainCount);


    //take domains from array at index 0 of data
      //pass each domain into lineDataGenerator

    // const repl = lineDataGenerator('repl.it');
    // const makerPass = lineDataGenerator('learn.makerpass.com');
    // const allDomains = lineDataGenerator('allData');


    //======= CREATE SVG ELEMENT =======
    const svg = d3.select("svg"),
    margin = { top: 20, right: 80, bottom: 20, left: 50 },
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + 0 + "," + margin.top + ")");


    //======= CREATE X AND Y SCALES ======
    //12 pm appearing on ticks between days
    const x = d3.scaleTime().domain([new Date(startDate.year, startDate.month, startDate.date), new Date(endDate.year, endDate.month, endDate.date)]).range([0, width])
    const y = d3.scaleLinear().domain([min, max]).range([height, 0])


    //DRAW X AND Y AXIS
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
      .append('text')
        .attr("x", 40)
        .attr("y", 30)
        .attr("dx", "0.71em")
        .attr("fill", "#000")
        .text("Days");

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .text("Visit Count");

        //======= PER DOMAIN ========

    const lineDataGenerator = (inputDomain) => {
      let domainData = [];
      for (const day of data) {
        for (const domain of day.domains) {
          if (domain.domain === inputDomain) {
            domainData.push({ count: domain.visits, date: new Date(day.date.slice(0, 4), day.date.slice(4, 6), day.date.slice(6)), domain:domain.domain });
          }
        }
      }
      return domainData;
    };


    //MAKE LINE PATH
    const generateLine = () => {
      return d3.line()
            .x((d) => { return x(d.date) })
            .y((d) => { return y(d.count) })
    }

    //APPEND ALL DOMAINS LINE TO GRAPH
    //+++ add css class to distinguish each line +++
    const generateSVG = (domain, color) => {     
      const tooltip = d3.select('#graph')
        .append("div")
        .style("position", "absolute")
        .style("z-index", "100")
      
      svg.append("path")
       .attr("d", generateLine()(domain))
       .attr('class', 'graph-path')
       .attr("stroke", color)
       .attr("stroke-width", 2)
       .attr("fill", "none");              
    
     svg.selectAll('.graph-path')
       .data(domain)
       .on('mouseover', ((d) => {
        console.log('domain', d.domain)
        tooltip.html(
          '<strong>' +
          d.domain +
          '</strong>'
        )
        tooltip.style("visibility", "visible")
        .style("textAlign", "center")
        .style("top", '80px')
        .style("left", '100px')
        return tooltip;
  
       }))
       .on('mouseout', () => {
         return tooltip.style("visibility", "hidden")
       });

      
      return svg;
    };


    const createDomainPath = (domain, color) => {
      return generateSVG(lineDataGenerator(domain), color);
    }


    const allData = () => {
      return data[0].domains.map((domain) => {
        console.log('domain', domain.domain);
        const colors = ['red', 'blue', 'green'];
        return createDomainPath(domain.domain, Math.floor(Math.random() * colors.length));
      })
    }


    //+++ somehow render all svgs at once by iterating +++
      // console.log('domains array', data[0].domains[1].domain)


    for (const domain of data[0].domains) {
     const colors = ['#909BBD', '#DAB4C6', '#E8BFBB', '#8DB8CB', '#6B8EB9']
     createDomainPath(domain.domain, colors.pop());
    }
  }

  render() {
    return (
      <div id="graph">
        <svg width="960" height="200" className="graph-svg"></svg>
      </div>

    );
  }

}

        // {this.props.data.map((dayItem) =>
        //   <div>date from new week data passed as props: {dayItem.date}</div>
        // )}