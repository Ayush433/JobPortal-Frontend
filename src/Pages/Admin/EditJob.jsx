import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateJobAction } from "../../Redux/actions/jobAction";

const EditJob = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   console.log(id);
  const { jobs, loading, deleting } = useSelector((state) => state.loadJobs);

  const nav = useNavigate();

  const job = jobs.find((job) => job._id === id);

  const formik = useFormik({
    initialValues: {
      title: job.title,
      id: job._id,
      description: job.description,
      salary: job.salary,
      location: job.location,
      jobType: job?.jobType.jobTypeName,
    },
    onSubmit: (values, actions) => {
      dispatch(updateJobAction(job._id, values));
      nav("/admin/jobs");
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit Job</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block font-bold mb-2"></label>
          <input
            type="text"
            id="id"
            value={formik.values.id}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the salary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="block font-bold mb-2">
            Job Type
          </label>
          <input
            type="text"
            id="jobType"
            value={formik.values.jobType}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the job type"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the job name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block font-bold mb-2">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            value={formik.values.salary}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the job name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the job name"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default EditJob;
