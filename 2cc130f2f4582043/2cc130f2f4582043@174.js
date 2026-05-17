function _1(md){return(
md`# Multi-Dimensional D3 Force Simulation

Multi-dimensional force-directed layout using [3d-force-graph](https://github.com/vasturiano/3d-force-graph).

This graph reusable component uses [D3-force-3d](https://github.com/vasturiano/d3-force-3d), an updated version of the [D3 force](https://github.com/d3/d3-force) physics engine, extended from the 2D standard to work in 3D or 1D.
Internally instead of a [d3-quadtree](https://github.com/d3/d3-quadtree), this layout uses [d3-octree](https://github.com/vasturiano/d3-octree) to optimize three-dimensional indexing, or [d3-binarytree](https://github.com/vasturiano/d3-binarytree) for one-dimension.

Rendered using [ThreeJS](https://github.com/mrdoob/three.js/)/WebGL.

Select different modes and cycle through various topological data sets using the controls.`
)}

function _dimensions(Inputs,html){return(
Inputs.radio([1, 2, 3], { value: 2, label: html`<b>Dimensions</b>`, format: dim => `${dim}D` })
)}

function _domEl(){return(
document.createElement('div')
)}

function _dataIdx(Inputs,dataLoadFns){return(
Inputs.button([["Show me another dataset", cnt => (cnt + 1)% dataLoadFns.length]], { value: 0 })
)}

function _5(forceGraph,width,dimensions,datasets,dataLoadFns,dataIdx,md)
{
  forceGraph
    .resetProps()
    .width(width)
    .height(540)
		.enableNodeDrag(false)
    .numDimensions(dimensions);
  
  // Reset dataset coordinates
  Object.values(datasets).forEach(data => data.nodes.forEach(node => {
    delete node.x;
    delete node.y;
    delete node.z;
  }));

  const { desc, url, fn } = dataLoadFns[dataIdx];

  fn();
  return md`Showing [*${desc}*](${url || ''}) data`
}


function _forceGraph(ForceGraph3D,domEl){return(
ForceGraph3D()(domEl)
)}

function _dataLoadFns(forceGraph,datasets){return(
[
  { 
    desc: 'Les Miserables',
    url: '/@d3/force-directed-graph',
    fn: () => forceGraph
      .graphData(datasets.miserables)
      .nodeLabel('id')
      .nodeAutoColorBy('group')
  },
  { 
    desc: 'Blocks',
    fn: () => forceGraph
      .graphData(datasets.blocks)
      .nodeLabel(node => `${node.user?node.user+': ':''}${node.description || node.id}`)
      .nodeAutoColorBy('user')
  },
  { 
    desc: 'D3 dependencies',
    url: '/@d3/force-directed-tree',
    fn: () => forceGraph
      .graphData(datasets.d3Dependencies)
      .nodeRelSize(0.5)
      .nodeId('path')
      .nodeVal('size')
      .nodeLabel('path')
      .nodeAutoColorBy('module')
  },
]
)}

function _8(md){return(
md`**Data**`
)}

async function _datasets(FileAttachment,csvParse)
{
  // Miserables
  const miserables = await FileAttachment("miserables.json").json();

  // Blocks
  const blocks = await FileAttachment("blocks.json").json();

  // D3 dependencies
  const d3Dependencies = { nodes: [], links: [] };
  csvParse(await FileAttachment("d3.csv").text()).forEach(({ size, path }) => {
    const levels = path.split('/'),
      module = levels.length > 1 ? levels[1] : null,
      leaf = levels.pop(),
      parent = levels.join('/');

    d3Dependencies.nodes.push({
      path,
      leaf,
      module,
      size: +size || 1
    });

    if (parent) {
      d3Dependencies.links.push({ source: parent, target: path});
    }
  });
  
  return { miserables, blocks, d3Dependencies };
}


function _10(md){return(
md`**Dependencies**`
)}

function _ForceGraph3D(require){return(
require('3d-force-graph')
)}

async function _csvParse(require){return(
(await require('d3-dsv')).csvParse
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["miserables.json", {url: new URL("./files/a0fc71f61421b367b9e1085ef5f11be7062f7c9d8a3472e5fc0a2ebbd9e5fb7145657b4ccdef5bb62e9ac8b1ef5551e3406d8bebd65983fe0b4cde426652b3e0.json", import.meta.url), mimeType: "application/json", toString}],
    ["blocks.json", {url: new URL("./files/e1bb4e55bde1c4f0e1ec05533d29b8a8b81299fd7ec8c7c173b946a1716bbfb25b6b5933b0adf27ed09bd5b386c32a1dd36f2d035bc8f433139448e7170a438c.json", import.meta.url), mimeType: "application/json", toString}],
    ["d3.csv", {url: new URL("./files/0c9b00796d27949ffac9fef505c9e6c014340df4dc14a59d786901600e63b37d206988f504bab64b283f01d0244f44fef67b3bd75f9150e1417f498e47a5a654.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof dimensions")).define("viewof dimensions", ["Inputs","html"], _dimensions);
  main.variable(observer("dimensions")).define("dimensions", ["Generators", "viewof dimensions"], (G, _) => G.input(_));
  main.variable(observer("domEl")).define("domEl", _domEl);
  main.variable(observer("viewof dataIdx")).define("viewof dataIdx", ["Inputs","dataLoadFns"], _dataIdx);
  main.variable(observer("dataIdx")).define("dataIdx", ["Generators", "viewof dataIdx"], (G, _) => G.input(_));
  main.variable(observer()).define(["forceGraph","width","dimensions","datasets","dataLoadFns","dataIdx","md"], _5);
  main.variable(observer("forceGraph")).define("forceGraph", ["ForceGraph3D","domEl"], _forceGraph);
  main.variable(observer("dataLoadFns")).define("dataLoadFns", ["forceGraph","datasets"], _dataLoadFns);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("datasets")).define("datasets", ["FileAttachment","csvParse"], _datasets);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer("ForceGraph3D")).define("ForceGraph3D", ["require"], _ForceGraph3D);
  main.variable(observer("csvParse")).define("csvParse", ["require"], _csvParse);
  return main;
}
