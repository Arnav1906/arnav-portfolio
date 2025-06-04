export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-2">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Technical Skills</h3>
          <ul className="list-disc ml-5">
            <li>Python, Java, C, C++, JavaScript</li>
            <li>ITK-SNAP, SPSS, OpenCV, Scikit-learn</li>
            <li>HTML, CSS, MEAN Stack, SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Soft Skills</h3>
          <ul className="list-disc ml-5">
            <li>Critical Thinking</li>
            <li>Team Collaboration</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
