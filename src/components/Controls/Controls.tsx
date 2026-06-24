import "./Controls.css";

interface Props {
  onDeal: () => void;
  onFlipFront: () => void;
  onFlipBack: () => void;
  onSlideOut: () => void;
}
export default function Control({
  onDeal,
  onFlipFront,
  onFlipBack,
  onSlideOut,
}: Props) {
  return (
    <div className="controls">
      <button className="btn btn-deal" onClick={onDeal}>
        <span>&#x271A;</span>
        Deal
      </button>
      <button className="btn btn-flip-front" onClick={onFlipFront}>
        <span>&#8635;</span>
        Flip Front
      </button>
      <button className="btn btn-flip-back" onClick={onFlipBack}>
        <span>&#8635;</span>
        Flip Back
      </button>
      <button className="btn btn-slide-out" onClick={onSlideOut}>
        <span>&#x21E8;</span>
        Slide Out
      </button>
    </div>
  );
}
