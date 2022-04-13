import React, { Component } from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


const textArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                   'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ag', 'ah', 'ag', 'ah', 'ag', 'ah',  'ag', 'ah', 'ag', 'ah', 'ag', 'ah', 'ag', 'ah'];



class App extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 250); 
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    

    if (textThatChanges === 'a'){
      return (
        <section>
        <div class="grid-container">
          <div id='cmd'>
            <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\></p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'b'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'c'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>p_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'd'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>py</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'e'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>pyt_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'f'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>pyth</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'g'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>pytho_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'h'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'i'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'j'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'k'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>></p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'l'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>p</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'm'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>pr</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'n'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>pri</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'o'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>prin</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'p'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print</p>
          </div>
        
  </div>
        </section>
      )
    }
    if (textThatChanges === 'q'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print(</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'r'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 's'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('H</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 't'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('He</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'u'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hel</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'v'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hell</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'w'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello</p>
          </div>
        
  </div>
        </section>
      )
    }

    
    if (textThatChanges === 'x'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello,</p>
          </div>
        
  </div>
        </section>
      )
    }

    
    if (textThatChanges === 'y'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, </p>
          </div>
        
  </div>
        </section>
      )
    }

    
    if (textThatChanges === 'z'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, W</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'aa'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, Wo</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'ab'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, Wor</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'ac'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, Worl</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'ad'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, World</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'ae'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, World'</p>
            <p></p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'af'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, World')</p>
            </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'ag'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, World')</p>
            <p>Hello, World</p>
            <p>>>>_</p>
          </div>
        
  </div>
        </section>
      )
    }

    if (textThatChanges === 'ah'){
      return (
        <section>
          
          <div class="grid-container">
          <div id='cmd'>
          <div id='task-bar'>
              <div id='grid-item-1'><p id='grid-item-para'>Command Prompt - python3</p></div>
              <div id='grid-item-2'>
              <FontAwesomeIcon icon={faMinus} />
              <FontAwesomeIcon icon={faSquare} />
              <FontAwesomeIcon icon={faXmark}/>
              </div>
          </div>
            <p>Microsoft Windows [Version 10.0.19044.1586]</p>
            <p>(c) Microsoft Corporation. All rights reserved.</p>
            <p></p>
            <p>c:\>python3</p>
            <p>Python 3.9.12 (tags/v3.9.12:b28265d, Mar 23 2022, 23:52:46) [MSC v.1929 64 bit (AMD64)] on win32</p>
            <p>Type "help", "copyright", "credits" or "license" for more information.</p>
            <p>>>>print('Hello, World')</p>
            <p>Hello, World</p>
            <p>>>></p>
          </div>
        
  </div>
        </section>
      )
    }


   

    
  }
}

export default App;