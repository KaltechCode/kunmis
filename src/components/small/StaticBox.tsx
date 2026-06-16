function StaticBox({ text, label }: { text: string; label: string }) {
  return (
    <div className="bg-background-white py-7 px-5 rounded-medium">
      <p className="section-title font-extrabold font-instrument">{text}</p>
      <p className="mt-4">{label}</p>
    </div>
  );
}

export default StaticBox;
