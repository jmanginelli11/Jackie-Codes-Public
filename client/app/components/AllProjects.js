import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProjectsThunk } from '../redux/projects';

const AllProjects = (props) => {
  useEffect(() => {
    props.getProjectsThunk();
  }, []);

  function changeGrayscale(e) {
    e.target.style.filter = 'none';
  }

  function changeBack(e) {
    e.target.style.filter = 'grayscale(1)';
  }

  const { projects } = props;

  return (
    <div>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => {
          return (
            <article key={project.id}>
              <Link key={project.id} to={project.url} target="_blank">
                <p>{project.name}</p>
                <img
                  className="project-image"
                  height="200px"
                  width="350px"
                  src={project.imageUrl}
                  onMouseOver={changeGrayscale}
                  onMouseLeave={changeBack}
                />
              </Link>
              <p className="project-descriptions">{project.description}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjectsThunk: () => {
      dispatch(getProjectsThunk());
    },
  };
};

export default connect(mapState, mapDispatch)(AllProjects);
