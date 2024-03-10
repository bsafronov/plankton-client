import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import {
  ProcessStageFlowTemplate,
  ProcessStageTemplate,
} from "~/entities/process/types";

type Props = {
  flows?: ProcessStageFlowTemplate[];
  stages?: ProcessStageTemplate[];
};

export const Flow = ({ flows = [], stages = [] }: Props) => {
  const nodes: Node[] = stages.map((item, i) => ({
    id: `${item.id}`,
    position: { x: 0, y: i * 100 },
    data: {
      label: item.name,
    },
  }));

  const edges: Edge[] = flows.map((item) => ({
    id: `${item.stageId}-${item.nextStageId}`,
    source: `${item.stageId}`,
    target: `${item.nextStageId}`,
    label: item.value,
  }));

  return (
    <ReactFlow nodes={nodes} edges={edges}>
      <Background />
      <Controls />
    </ReactFlow>
  );
};
