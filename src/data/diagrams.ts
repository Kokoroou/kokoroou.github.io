// Inline SVG, coloured through CSS tokens (see .diagram in globals.css).
export const ekycDiagram = `<svg viewBox="0 0 700 150" role="img" aria-label="A request goes to a stateless eKYC service and returns a response immediately. The service writes logs through Logstash to Kibana, searchable by trace id. A ConfigMap supplies rare corrections.">
  <defs><marker id="ah2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" class="arr"/></marker></defs>
  <rect class="box" x="8" y="30" width="110" height="44" rx="6"/><text x="63" y="49" text-anchor="middle">Request</text><text class="m" x="63" y="63" text-anchor="middle">ID card / passport</text>
  <rect class="hot" x="228" y="30" width="190" height="44" rx="6"/><text x="323" y="49" text-anchor="middle">Stateless service</text><text class="m" x="323" y="63" text-anchor="middle">detect · read · validate</text>
  <rect class="box" x="528" y="30" width="110" height="44" rx="6"/><text x="583" y="49" text-anchor="middle">Response</text><text class="m" x="583" y="63" text-anchor="middle">returned at once</text>
  <rect class="box" x="228" y="108" width="190" height="34" rx="6"/><text x="323" y="129" text-anchor="middle">Logstash → Kibana (trace_id)</text>
  <rect class="box" x="458" y="108" width="180" height="34" rx="6"/><text x="548" y="129" text-anchor="middle">ConfigMap: rare fixes</text>
  <path class="ln" d="M118 52H226" marker-end="url(#ah2)"/><path class="ln" d="M418 52H526" marker-end="url(#ah2)"/><path class="ln" d="M323 74V106" marker-end="url(#ah2)"/><path class="ln" d="M548 106V92Q548 82 500 82H418" marker-end="url(#ah2)"/>
</svg>`;
