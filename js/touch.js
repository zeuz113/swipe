// JavaScript Document


var datos4
var init_Swipe

$(function() {			
					//Enable swiping...
				init_Swipe=function(){
					
					////alert('inicia')
					
			//			$("#controller2").swipe( {
//							swipeStatus:function(event, phase, direction, distance, duration, fingers){
//								if(phase=='start'){
//								
//								saltar()
//								}
//								}
//							
//							})
					
					$("#canvas").swipe( {
						swipeStatus:function(event, phase, direction, distance, duration, fingers)
						{
							
							var dataActual=phase
							evalua(fingerData,duration)
						
							distance1=distance
							duration1=duration
							
							//if(respuesta=='Abajo'){
//								
//								$("#controllerBg").swipe("disable")
//								resetButton()
//								
//								}
							
							//setAnimation(direction,distance)
						//	console.log("datoHorizontal "+datoHorizontal)
							//if(datoHorizontal>0 && datoHorizontal<2000){
							
							//console.log('swipe')
						//	console.log('swipe datos '+phase)
							
							//setAnimation(direction,distance)
							//TEXTO HTML	
							var str = "<h4>Swipe Phase : " + phase + "<br/>";
							//str += "Direction from inital touch: " + direction + "<br/>";
//							str += "Distance from inital touch: " + distance + "<br/>";
//							str += "Duration of swipe: " + duration + "<br/>";
//							str += "Fingers used: " + fingerData[1].start.x + "<br/></h4>";
							if(phase=="move"){
								//setTimeout(function(){console.log('grados inicia '+grados)},500);
								defineInitAngle()
								//console.log('grados inicia '+grados)

								
								}
		
							//Here we can check the:
							//phase : 'start', 'move', 'end', 'cancel'
							//direction : 'left', 'right', 'up', 'down'
							//distance : Distance finger is from initial touch point in px
							//duration : Length of swipe in MS 
							//fingerCount : the number of fingers used
							
							
							if(dataActual=="end"){
								//console.log('end')
								lado='center'
								animando=false
								
								touchin=false
								$('#controller1').animate({marginLeft: 25} , 10);
								$('#controller1').animate({marginTop: 25} , 10);
								
								}
							
							
							

							if (phase!="cancel" && phase!="end") {
								if (duration<5000){
									//str +="Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>"
									}
								else{
									//str +="Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>"
									}
							
								if (distance<200){
									//str +="Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>"
									}
								else{
									//str +="Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>"
									}
									
							}
							
							if (phase=="cancel"){
								//str +="<br/>Handler not triggered. <br/> One or both of the thresholds was not met "
							}
							if (phase=="end"){
							ladoStage='centro'
							
								//str +="<br/>Handler was triggered."	
								console.log('grados termina '+grados)
								initialAngle=false;
								evalShoot()
								//direction = calculateDirection(currentFinger.start, currentFinger.end);
							}
							
							
							$("#test").html(str);
							},
						threshold:200,
						maxTimeThreshold:5000,
						fingers:'all'
					});
					
					
					
					
				}
				
				init_Swipe()
				});
				
				
				function evalua(data,data2){
					
					
	
	//console.log('data2 '+data2)
	//console.log("x inicia "+data[0].start.x)
//	console.log("x termina"+data[0].end.x)
//	
//	console.log("y inicia "+data[0].start.y)
//	console.log("y termina"+data[0].end.y)
	
	$('#ydatos').html("y inicia "+data[0].start.y+"y termina "+data[0].end.y)
	$('#xdatos').html("x inicia "+data[0].start.x+"x termina "+data[0].end.x)
	
	
	
	
	datoHorizontal=data[0].start.x
	datoHorizontal2=data[0].end.x
	datovertical=data[0].start.y
	datovertical2=data[0].end.y
	difHorizontal=datoHorizontal2-datoHorizontal
	difVertical=datovertical2-datovertical
	

	
	$('#finger2Sw').html("Diferencia X "+difHorizontal+" Diferencia Y "+difVertical)
	$('#ydatos').html("y inicia "+data[0].start.y+"y termina "+data[0].end.y)
	$('#xdatos').html("X inicia "+data[0].start.x+"x termina "+data[0].end.x)
	
	
	

	
	if ((datoHorizontal2-datoHorizontal)<0 && (datovertical2-datovertical)==0){
		respuesta='izquierda'
		ladoStage='izquierda'
		if(ladoStage!=ladoStageAnterior){
			animando=false
		ladoStageAnterior=ladoStage
		}
		
		
		
		
		lado='der'
		
		
		}else if ((datoHorizontal2-datoHorizontal)>0 && (datovertical2-datovertical)==0){
		respuesta='derecha'
		ladoStage='derecha'
		if(ladoStage!=ladoStageAnterior){
			animando=false
		ladoStageAnterior=ladoStage
		}
	
		
		lado='izq'
		
		
		
		
	}else if ((datoHorizontal2-datoHorizontal)>0 && (datovertical2-datovertical)<0){
	
	
	
		respuesta='derecha Arriba'
		ladoStage='derecha'
		if(ladoStage!=ladoStageAnterior){
			animando=false
			ladoStageAnterior=ladoStage
		
		}
		
		
		lado='izq'
		
		
		}else if ((datoHorizontal2-datoHorizontal)>0 && (datovertical2-datovertical)>0){
				respuesta='derecha Abajo'
			ladoStage='derecha'
		if(ladoStage!=ladoStageAnterior){
			animando=false
			ladoStageAnterior=ladoStage
			}
		
			
			lado='izq';
	
		
		
	
	
	
	
		
		}	
		
		else if ((datoHorizontal2-datoHorizontal)<0 && (datovertical2-datovertical)<0){
		respuesta='izquierda Arriba';
		ladoStage='izquierda'
		if(ladoStage!=ladoStageAnterior){
			animando=false
			ladoStageAnterior=ladoStage
		}
		animando=false
		
		lado='der'
		
		
		}
		
		else if ((datoHorizontal2-datoHorizontal)<0 && (datovertical2-datovertical)>0){
		respuesta='izquierda Abajo';
		ladoStage='izquierda'
		if(ladoStage!=ladoStageAnterior){
			animando=false
			ladoStageAnterior=ladoStage
			}
		
		animando=false
		
		lado='der'
		
		
		}
		
		
		else if ( (datovertical2-datovertical)<0 && (datoHorizontal2-datoHorizontal)==0 ){
		respuesta='Arriba'
		
		}
		
		else if ((datovertical2-datovertical)>0 && (datoHorizontal2-datoHorizontal)==0){
		respuesta='Abajo'
		
		
		}
		
		
		
if(difHorizontal>=70 || difHorizontal<=-70 ){
		//$("#controller1").hide()
	$("#controller1").swipe("disable")
setTimeout(function(){resetButton()},300);
	}
	
	
if(difVertical>70 || difVertical<-70){
	$("#controller1").swipe("disable")
	
	
	setTimeout(function(){resetButton()},300);




	}


	

	
	//$('#datos_final').html(respuesta)
//	$('#controller1').animate({marginLeft:25+difHorizontal} , 0);
	//$('#controller1').animate({marginTop:25+difVertical} , 0);
	
	
//	console.log("start 0")
//	console.log(fingerData[0].start)
////console.log("start 1")
//console.log('finger '+fingerData[0].end.y)
//console.log("swipeUp "+swipeUp)
//	
//	
//	
//console.log("end 0")		
//	console.log(fingerData[0].end)
	//console.log("end 1")
	//console.log(fingerData[1].end)	
	
	
	
	}
				
				
				function setAnimation(datos,datos4){
					
				
					
					//$('#controller1').animate({marginLeft:100+difHorizontal} , 10);
					//$('#controller1').animate({marginTop:100+difVertical} , 10);
					
					//$('#controller1').css('left',datos)
					//console.log('datos4 '+datos4)
					
				//	if(datos=="right"){
//						$('#controller1').animate({marginLeft:100+datos4} , 10);
//						}
//						
//					if(datos=="left"){
//						$('#controller1').animate({marginLeft:100-datos4} , 10);
//						}	
//						
//					if(datos=="up"){
//						$('#controller1').animate({marginTop:100-datos4} , 10);
//						}		
//					
//					if(datos=="down"){
//						$('#controller1').animate({marginTop:100+datos4} , 10);
//						}	
					//$('#controller1').animate({marginTop:100-datos4} , 10);
					//$('#controller1').animate({marginLeft:100-datos4} , 10);
					
					
					}
					
					
				function resetButton(){
					ladoStage='centro'
					$('#controller1').animate({marginLeft: 25} , 10);
					$('#controller1').animate({marginTop: 25} , 10);
					respuesta=''
					$("#controller1").swipe("enable")
					 
					}	
					
				function evalShoot(){
					//evalComba()
					
					////alert("SHOOT")
					$('#datos_finalXY').html("termina  X"+fingerData[0].end.x+" termina Y "+fingerData[0].end.y)
					//console.log("termina  X"+fingerData[0].end.x+" termina Y "+fingerData[0].end.y)
					gradosFinal=grados
					$('#giro1').html('grados Termina '+grados)
					gradosDiferencia=gradosInicia-gradosFinal
					
					if(gradosDiferencia>50 || gradosDiferencia<-50){
						
						if(gradosDiferencia>50){
							gradosAdicionales=gradosDiferencia-50
							}else if(gradosDiferencia<-50){
							gradosAdicionales=gradosDiferencia+50
							}
						gradosFinal=gradosFinal+gradosAdicionales
						console.log('gradosAdicionales '+ gradosAdicionales)
					
						}
					
					$('#giro4').html('gradosDiferencia '+ gradosDiferencia)
					
					evalLadoComba()
					
					
					shootStrong=Math.round(((distance1*1000)/duration1))
					$('#giro3').html('calculo FInal shootStrong '+ shootStrong)
					//console.log('distance '+distance1)
					
					evalColumna(gradosFinal)
					evalFila(shootStrong)
					
					if(columnaArco>=7){
					shootBall()
					}	
				}
					
					function defineInitAngle(){
						$('#giro5').html('grados Actuales '+ grados)
						if(initialAngle==false){
							setTimeout(function(){
								//console.log('grados inicia '+grados)
							
							gradosInicia=grados
							$('#giro').html('grados inicia '+grados)
							},100);
							
							
							initialAngle=true;
							}
					
								
								
					
					}
				
					function evalColumna(valor){
						
							console.log('grados final  '+ valor)
						if(valor<226){
							
							columnaArco=1
								console.log(columnaArco)
							}else {
						
						columnaArco=1
						//gradosFinal
						for(i=226;i<=valor;i=i+7){
							
							columnaArco++
						//	console.log('columnaArco '+columnaArco)
							if(columnaArco==13){
								//console.log('columnaArco '+columnaArco)
								//return;
								
								break
								}
							
							
							
							
							}
							
							
							}
							
							
							

						
						
						
						}
						
						
						function evalFila(valor){
							if(valor>1175){
								filaArco=6
									console.log('filaArco '+filaArco)
								
								}else{
								filaArco=1
								for(i=300;i<=valor;i=i+175){
							
							filaArco++
							
							console.log('filaArco '+filaArco)
							
							
							
							}
								
								}
								$("#kick").html('columnaArco '+columnaArco +" filaArco "+filaArco)
								}
								
							
					function evalLadoComba(){
						
						if(gradosDiferencia>20){
							//console.log('comba izquierda')
							shootType=1
							cualComba="A"
							
							}
							
						else if(gradosDiferencia<-20){
							//console.log('comba derecha')
							shootType=3
								cualComba="C"
							
							}	
						else {
							//	console.log('linear')
								shootType=2
									cualComba="B"
							
							}		
						
						//gradosInicia,gradosFinal
						
						
							
						
						}
					
					
					function shootBall(){
						//alert(columnaArco)
						TweenMax.to(exportRoot.goalKeeper, 0, {bezier:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}], ease:Power1.easeInOut});
				//exportRoot.goalKeeper.alpha=0
//						
//						
//					
						cualBalon=(columnaArco*filaArco)
//						
//						
//						
//						//exportRoot.balls.ball_[cualBalon][cualBalon].alpha=0
//						
								if(cualBalon!=78){
									
									exportRoot.balls.ball_78A.alpha=0
										}
										if(cualBalon==78){
											
											if(cualComba!='A'){
												exportRoot.balls.ball_78A.alpha=0
												}
											}

						
						eval("exportRoot.balls.ball_"+cualBalon+cualComba+".gotoAndStop(0)")
						eval("exportRoot.balls.ball_"+cualBalon+cualComba+".alpha=1")
						eval("exportRoot.balls.ball_"+cualBalon+cualComba+".play()")
						
					//alert('cualBalon '+cualBalon+' cualComba '+cualComba+" columnaArco "+columnaArco+" filaArco "+filaArco+" shootType "+shootType)
					//	//alert(" "+cualBalon+" "+cualComba)
						
						
							
						
						}
					
					
					
					
					