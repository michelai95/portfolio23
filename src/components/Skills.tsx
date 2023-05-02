import React from 'react';

function Skills() {
  return (
    <div className='Table-Container'>
      <div className='Table-Wrapper'>
        <table>
          <tbody>
          <tr>
            <th>Languages</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>Javascript</td>
            <td>Ruby</td>
            <td>Python</td>
            <td>CoffeeScript</td>
            <td>Typescript</td>
            <td>HTML</td>
            <td>CSS</td>
            <td>SCSS</td>
            <td>HAML</td>
            <td>MySQL</td>
          </tr>
          </tbody>
        </table>

        <table>
          <tbody>
          <tr>
            <th>Tools</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>Rspec</td>
            <td>Capybara</td>
            <td>Yarn</td>
            <td>NPM</td>
            <td>Vite</td>
            <td>Sentry</td>
            <td>Chromatic</td>
            <td>Semaphore</td>
            <td>Storybook</td>
            <td>Vercel</td>
          </tr>
          <tr>
            <td>Heroku</td>
            <td>Docker</td>
            <td>C-Panel</td>
            <td>Figma</td>
            <td>Jira</td>
            <td>Datadog</td>
            <td>Logentries</td>
            <td>Heap</td>
            <td>Segment</td>
            <td>SourceTree</td>
            <td>GCP</td>
          </tr>
          </tbody>
        </table>

        <table>
          <tbody>
          <tr>
            <th>Frameworks</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>React</td>
            <td>Rails</td>
            <td>Vue</td>
            <td>Node.JS</td>
            <td>ExpressJS</td>
            <td>NextJS</td>
            <td>Redux</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Skills;