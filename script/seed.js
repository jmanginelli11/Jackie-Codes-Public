'use strict';
const { BulkRecordError } = require('sequelize');
const { db, Project } = require('../server/db');
const projectData = require('./projectData');

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log('db synced');

    await Promise.all(
      projectData.map((project) => {
        return Project.create(project);
      })
    );

    console.log(`seeded ${projectData.length} projects`);
    console.log('seeded successfully');
  } catch (err) {
    console.log(err);
  }
};

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
