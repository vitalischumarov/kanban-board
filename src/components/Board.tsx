type Prop = {
  boardStatus: String;
};

export default function Board({ boardStatus }: Prop) {
  return (
    <div className="h-full mt-10 w-62">
      <h3 className="text-amber-50 bg-stone-600 p-6 text-center">
        {boardStatus}
      </h3>
    </div>
  );
}
