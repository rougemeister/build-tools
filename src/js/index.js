import tools from './tools';
import '../styles/main.scss';

document.getElementById('content').innerHTML = `
  <ul >
    ${tools.map(tool => `
    
            <li class="item">
                <div class='img-container'>
                    <img src="images/${tool.image}"/>
                </div>
                <div class='text'>
                <h2>${tool.name}</h2>
                <p>${tool.description}</p>
                <div class='btn-container'>
                    <a href='${tool.link}' target='_blank'>
                        <button>Learn more</button>
                    </a>
                </div>
                </div>
            </li>`).join('')}
  </ul>
`;



console.log(tools[0].image)