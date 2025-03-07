import React, { useState, useEffect, createContext, useContext } from "react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";

// Context for global state management
const AssignmentContext = createContext();

const AssignmentProvider = ({ children }) => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/assignments.json") // Simulated API call
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load assignments.");
        setLoading(false);
      });
  }, []);

  return (
    <AssignmentContext.Provider value={{ assignments, loading, error }}>
      {children}
    </AssignmentContext.Provider>
  );
};

const useAssignments = () => useContext(AssignmentContext);

const AssignmentList = ({ onSelect }) => {
  const { assignments, loading, error } = useAssignments();

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
        <p className="ml-2 text-gray-600">Loading assignments...</p>
      </div>
    );
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Assignment Submission System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignments.map((assignment) => (
          <Card
            key={assignment.id}
            className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer transition-all"
            onClick={() => onSelect(assignment)}
          >
            <CardContent>
              <h2 className="text-xl font-semibold text-gray-800">
                {assignment.title}
              </h2>
              <p className="text-gray-600">Due Date: {assignment.dueDate}</p>
              <p className="text-gray-500 mt-2">{assignment.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const AssignmentDetail = ({ assignment, onBack }) => {
  const [submission, setSubmission] = useState({
    name: "",
    email: "",
    file: null,
    comments: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setSubmission({ ...submission, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSubmission({ ...submission, file: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (!submission.name || !submission.email || !submission.file) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmission({ ...submission, status: "Submitted" });
    alert("Assignment submitted successfully!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Button onClick={onBack} className="mb-4 bg-gray-600 hover:bg-gray-700">
        Go Back
      </Button>
      <Card className="p-6 border rounded-lg shadow-md bg-white">
        <CardContent>
          <h2 className="text-xl font-semibold text-gray-800">
            {assignment.title}
          </h2>
          <p className="text-gray-600">Due Date: {assignment.dueDate}</p>
          <p className="text-gray-500 mt-2">{assignment.description}</p>
          <h3 className="text-lg font-medium mt-6">Submit Assignment</h3>
          <div className="space-y-4 mt-4">
            <Input
              type="text"
              name="name"
              placeholder="Student Name (Required)"
              value={submission.name}
              onChange={handleChange}
              className="border-gray-300"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email (Required)"
              value={submission.email}
              onChange={handleChange}
              className="border-gray-300"
            />
            <Input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="border-gray-300"
            />
            <Textarea
              name="comments"
              placeholder="Comments (Optional)"
              value={submission.comments}
              onChange={handleChange}
              className="border-gray-300"
            />
            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Submit Assignment
            </Button>
            {submission.status === "Submitted" && (
              <p className="text-green-600 mt-2 bg-green-100 p-2 rounded-lg">
                Submission Status: {submission.status}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function AssignmentSubmission() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  return (
    <AssignmentProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {selectedAssignment ? (
          <AssignmentDetail
            assignment={selectedAssignment}
            onBack={() => setSelectedAssignment(null)}
          />
        ) : (
          <AssignmentList onSelect={setSelectedAssignment} />
        )}
      </div>
    </AssignmentProvider>
  );
}
