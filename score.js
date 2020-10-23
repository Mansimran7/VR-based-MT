AFRAME.registerComponent('score-counter', {
      schema: {
        el: {
          type: 'selector'
        },
        score:{
          type: 'int',
          default: 0
        },
      },

      init: function () {
        var sceneEl = document.querySelector('a-scene'); 
        var scoreBoard = document.querySelector('#score');
        var learningBoard = document.querySelector('#report')
        var learningText = 'Your Learnings: \n'
        var laptop = false;
        var documents = false;
        var smartcard = false;
        var shredder = false;
        var dustbin = false;
        var folder = false;
        var cabinet = false;
        var whiteboard = false;

        document.getElementById("laptopEntity").addEventListener('click', () => {
          if(laptop == false){
            laptop = true
            this.data.score++;
            var percentage = (this.data.score/5) * 100
          var newScore = 'Score: ' + percentage +' %'
          scoreBoard.setAttribute('text', 'value',  newScore)
          learningText = learningText + 'Never leave your laptop unattended! (+1) \n';
          learningBoard.setAttribute('text', 'value', learningText)
          } 
        })

        document.getElementById("smartCardEntity").addEventListener('click', () => {
          if(smartcard == false){
            smartcard = true;
            this.data.score++;
          var percentage = (this.data.score/5) * 100
          var newScore = 'Score: ' + percentage +' %'
          scoreBoard.setAttribute('text', 'value',  newScore)
          learningText = learningText + 'Smart card should never be left unattended! (+1) \n';
          learningBoard.setAttribute('text', 'value', learningText)
          }
          
        })

        document.getElementById("folderEntity").addEventListener('click', () => {
          if(folder == false){
            folder = true;
          }        
        })

        document.getElementById("cabinetEntity").addEventListener('click', () => {
          if(cabinet == false && folder == true){
            cabinet = true;
            this.data.score++;
          var percentage = (this.data.score/5) * 100
          var newScore = 'Score: ' + percentage +' %'
          scoreBoard.setAttribute('text', 'value',  newScore)
           learningText = learningText + 'UBS Confidential document should be stored in the cabinet! (+1) \n';
          learningBoard.setAttribute('text', 'value', learningText)
          }
          
        })

        document.getElementById("DocumentEntity").addEventListener('click', () => {
          if(documents == false){
            documents = true;
          }        
        })

        document.getElementById("shredderEntity").addEventListener('click', () => {
          if(shredder == false && documents == true){
            shredder = true
            documents = false
            this.data.score++;
          var percentage = (this.data.score/5) * 100
          var newScore = 'Score: ' + percentage +' %'
          scoreBoard.setAttribute('text', 'value',  newScore)
           learningText = learningText + 'Unwanted UBS documents should safely be disposed in the shredder! (+1) \n';
          learningBoard.setAttribute('text', 'value', learningText)
          }
          
        })

        document.getElementById("dustbinEntity").addEventListener('click', () => {
          if(dustbin == false && documents == true){
            dustbin = true
            documents = false
            this.data.score--;
          var percentage = (this.data.score/5) * 100
          var newScore = 'Score: ' + percentage +' %'
          scoreBoard.setAttribute('text', 'value',  newScore)
           learningText = learningText + 'Never dispose Unwanted UBS documents in the dustbin (-1) \n';
          learningBoard.setAttribute('text', 'value', learningText)
          }
          
        })

        document.getElementById("whiteBoardEntity").addEventListener('click', () => {
          if(whiteboard == false){
            whiteboard = true;
            this.data.score++;
          var percentage = (this.data.score/5) * 100
          var newScore = 'Score: ' + percentage +' %'
          scoreBoard.setAttribute('text', 'value',  newScore)
           learningText = learningText + 'White board should be clean when you leave the room (+1) \n';
          learningBoard.setAttribute('text', 'value', learningText)
          }
          
        })
      }
    });