(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.basePenalty = function() {
	this.initialize();

	// Balls
	this.balls = new lib._Ballones_balls();
	this.balls.setTransform(586.1,575.4,1,1,0,0,0,14.3,14.3);

	// Guia
	this.reticula = new lib.retuculaMAp();
	this.reticula.setTransform(554.9,243.6,1,1,0,0,0,0,-119.4);

	// GoalKepper
	this.goalKeeper = new lib.mc_goolkeeper();
	this.goalKeeper.setTransform(536.5,275.5,0.913,0.913,0,0,0,302.5,124);

	// Arco
	this.instance = new lib.mc_arco();
	this.instance.setTransform(556.2,282.1);

	// stadium
	this.instance_1 = new lib.baseBg4();
	this.instance_1.setTransform(0,-51.9);

	this.addChild(this.instance_1,this.instance,this.goalKeeper,this.reticula,this.balls);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-51.9,1136,692);


// symbols:
(lib.app_penalti = function() {
	this.initialize(img.app_penalti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,731);


(lib.arco = function() {
	this.initialize(img.arco);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,169);


(lib.Arquero_00000 = function() {
	this.initialize(img.Arquero_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00002 = function() {
	this.initialize(img.Arquero_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00003 = function() {
	this.initialize(img.Arquero_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00005 = function() {
	this.initialize(img.Arquero_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00006 = function() {
	this.initialize(img.Arquero_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00008 = function() {
	this.initialize(img.Arquero_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00009 = function() {
	this.initialize(img.Arquero_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00011 = function() {
	this.initialize(img.Arquero_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00012 = function() {
	this.initialize(img.Arquero_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00014 = function() {
	this.initialize(img.Arquero_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00015 = function() {
	this.initialize(img.Arquero_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00017 = function() {
	this.initialize(img.Arquero_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00018 = function() {
	this.initialize(img.Arquero_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00020 = function() {
	this.initialize(img.Arquero_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00021 = function() {
	this.initialize(img.Arquero_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00023 = function() {
	this.initialize(img.Arquero_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00024 = function() {
	this.initialize(img.Arquero_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00026 = function() {
	this.initialize(img.Arquero_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00027 = function() {
	this.initialize(img.Arquero_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00029 = function() {
	this.initialize(img.Arquero_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00030 = function() {
	this.initialize(img.Arquero_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00032 = function() {
	this.initialize(img.Arquero_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00033 = function() {
	this.initialize(img.Arquero_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00035 = function() {
	this.initialize(img.Arquero_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00036 = function() {
	this.initialize(img.Arquero_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00038 = function() {
	this.initialize(img.Arquero_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00039 = function() {
	this.initialize(img.Arquero_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00041 = function() {
	this.initialize(img.Arquero_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00042 = function() {
	this.initialize(img.Arquero_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00044 = function() {
	this.initialize(img.Arquero_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00045 = function() {
	this.initialize(img.Arquero_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00047 = function() {
	this.initialize(img.Arquero_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00048 = function() {
	this.initialize(img.Arquero_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00051 = function() {
	this.initialize(img.Arquero_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00053 = function() {
	this.initialize(img.Arquero_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00054 = function() {
	this.initialize(img.Arquero_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00056 = function() {
	this.initialize(img.Arquero_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00057 = function() {
	this.initialize(img.Arquero_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00059 = function() {
	this.initialize(img.Arquero_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00060 = function() {
	this.initialize(img.Arquero_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00062 = function() {
	this.initialize(img.Arquero_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00063 = function() {
	this.initialize(img.Arquero_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00065 = function() {
	this.initialize(img.Arquero_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00066 = function() {
	this.initialize(img.Arquero_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00068 = function() {
	this.initialize(img.Arquero_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00069 = function() {
	this.initialize(img.Arquero_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00071 = function() {
	this.initialize(img.Arquero_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00072 = function() {
	this.initialize(img.Arquero_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00074 = function() {
	this.initialize(img.Arquero_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00075 = function() {
	this.initialize(img.Arquero_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00077 = function() {
	this.initialize(img.Arquero_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00078 = function() {
	this.initialize(img.Arquero_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00080 = function() {
	this.initialize(img.Arquero_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00081 = function() {
	this.initialize(img.Arquero_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00083 = function() {
	this.initialize(img.Arquero_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00084 = function() {
	this.initialize(img.Arquero_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00086 = function() {
	this.initialize(img.Arquero_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00087 = function() {
	this.initialize(img.Arquero_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00089 = function() {
	this.initialize(img.Arquero_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00090 = function() {
	this.initialize(img.Arquero_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00092 = function() {
	this.initialize(img.Arquero_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00093 = function() {
	this.initialize(img.Arquero_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00095 = function() {
	this.initialize(img.Arquero_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00096 = function() {
	this.initialize(img.Arquero_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00098 = function() {
	this.initialize(img.Arquero_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00099 = function() {
	this.initialize(img.Arquero_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00101 = function() {
	this.initialize(img.Arquero_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00102 = function() {
	this.initialize(img.Arquero_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00104 = function() {
	this.initialize(img.Arquero_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00105 = function() {
	this.initialize(img.Arquero_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00107 = function() {
	this.initialize(img.Arquero_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00108 = function() {
	this.initialize(img.Arquero_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00110 = function() {
	this.initialize(img.Arquero_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00111 = function() {
	this.initialize(img.Arquero_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00113 = function() {
	this.initialize(img.Arquero_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00114 = function() {
	this.initialize(img.Arquero_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00116 = function() {
	this.initialize(img.Arquero_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00117 = function() {
	this.initialize(img.Arquero_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00119 = function() {
	this.initialize(img.Arquero_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00120 = function() {
	this.initialize(img.Arquero_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00122 = function() {
	this.initialize(img.Arquero_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00123 = function() {
	this.initialize(img.Arquero_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00125 = function() {
	this.initialize(img.Arquero_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00126 = function() {
	this.initialize(img.Arquero_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00128 = function() {
	this.initialize(img.Arquero_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00129 = function() {
	this.initialize(img.Arquero_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00131 = function() {
	this.initialize(img.Arquero_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00132 = function() {
	this.initialize(img.Arquero_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00134 = function() {
	this.initialize(img.Arquero_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00135 = function() {
	this.initialize(img.Arquero_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00137 = function() {
	this.initialize(img.Arquero_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00138 = function() {
	this.initialize(img.Arquero_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00140 = function() {
	this.initialize(img.Arquero_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00141 = function() {
	this.initialize(img.Arquero_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00143 = function() {
	this.initialize(img.Arquero_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00144 = function() {
	this.initialize(img.Arquero_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00146 = function() {
	this.initialize(img.Arquero_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00147 = function() {
	this.initialize(img.Arquero_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00149 = function() {
	this.initialize(img.Arquero_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00150 = function() {
	this.initialize(img.Arquero_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00152 = function() {
	this.initialize(img.Arquero_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00153 = function() {
	this.initialize(img.Arquero_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00155 = function() {
	this.initialize(img.Arquero_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00156 = function() {
	this.initialize(img.Arquero_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00158 = function() {
	this.initialize(img.Arquero_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00159 = function() {
	this.initialize(img.Arquero_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00165 = function() {
	this.initialize(img.Arquero_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00167 = function() {
	this.initialize(img.Arquero_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00168 = function() {
	this.initialize(img.Arquero_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00170 = function() {
	this.initialize(img.Arquero_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00171 = function() {
	this.initialize(img.Arquero_00171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00173 = function() {
	this.initialize(img.Arquero_00173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00174 = function() {
	this.initialize(img.Arquero_00174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00176 = function() {
	this.initialize(img.Arquero_00176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00177 = function() {
	this.initialize(img.Arquero_00177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00179 = function() {
	this.initialize(img.Arquero_00179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00180 = function() {
	this.initialize(img.Arquero_00180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00182 = function() {
	this.initialize(img.Arquero_00182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00183 = function() {
	this.initialize(img.Arquero_00183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00185 = function() {
	this.initialize(img.Arquero_00185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00186 = function() {
	this.initialize(img.Arquero_00186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00188 = function() {
	this.initialize(img.Arquero_00188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00189 = function() {
	this.initialize(img.Arquero_00189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00191 = function() {
	this.initialize(img.Arquero_00191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00192 = function() {
	this.initialize(img.Arquero_00192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00194 = function() {
	this.initialize(img.Arquero_00194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00195 = function() {
	this.initialize(img.Arquero_00195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00197 = function() {
	this.initialize(img.Arquero_00197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00198 = function() {
	this.initialize(img.Arquero_00198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00200 = function() {
	this.initialize(img.Arquero_00200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00201 = function() {
	this.initialize(img.Arquero_00201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00203 = function() {
	this.initialize(img.Arquero_00203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00204 = function() {
	this.initialize(img.Arquero_00204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00206 = function() {
	this.initialize(img.Arquero_00206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00207 = function() {
	this.initialize(img.Arquero_00207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00209 = function() {
	this.initialize(img.Arquero_00209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00210 = function() {
	this.initialize(img.Arquero_00210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00212 = function() {
	this.initialize(img.Arquero_00212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00213 = function() {
	this.initialize(img.Arquero_00213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00215 = function() {
	this.initialize(img.Arquero_00215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00216 = function() {
	this.initialize(img.Arquero_00216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00218 = function() {
	this.initialize(img.Arquero_00218);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00219 = function() {
	this.initialize(img.Arquero_00219);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00221 = function() {
	this.initialize(img.Arquero_00221);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00222 = function() {
	this.initialize(img.Arquero_00222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00224 = function() {
	this.initialize(img.Arquero_00224);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00225 = function() {
	this.initialize(img.Arquero_00225);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00227 = function() {
	this.initialize(img.Arquero_00227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00228 = function() {
	this.initialize(img.Arquero_00228);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00230 = function() {
	this.initialize(img.Arquero_00230);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00231 = function() {
	this.initialize(img.Arquero_00231);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00233 = function() {
	this.initialize(img.Arquero_00233);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00234 = function() {
	this.initialize(img.Arquero_00234);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00236 = function() {
	this.initialize(img.Arquero_00236);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00237 = function() {
	this.initialize(img.Arquero_00237);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00239 = function() {
	this.initialize(img.Arquero_00239);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00240 = function() {
	this.initialize(img.Arquero_00240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00242 = function() {
	this.initialize(img.Arquero_00242);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00243 = function() {
	this.initialize(img.Arquero_00243);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00245 = function() {
	this.initialize(img.Arquero_00245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00246 = function() {
	this.initialize(img.Arquero_00246);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00248 = function() {
	this.initialize(img.Arquero_00248);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00249 = function() {
	this.initialize(img.Arquero_00249);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00251 = function() {
	this.initialize(img.Arquero_00251);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00252 = function() {
	this.initialize(img.Arquero_00252);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00254 = function() {
	this.initialize(img.Arquero_00254);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00255 = function() {
	this.initialize(img.Arquero_00255);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00257 = function() {
	this.initialize(img.Arquero_00257);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00258 = function() {
	this.initialize(img.Arquero_00258);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00260 = function() {
	this.initialize(img.Arquero_00260);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00261 = function() {
	this.initialize(img.Arquero_00261);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00263 = function() {
	this.initialize(img.Arquero_00263);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00264 = function() {
	this.initialize(img.Arquero_00264);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00266 = function() {
	this.initialize(img.Arquero_00266);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00267 = function() {
	this.initialize(img.Arquero_00267);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00269 = function() {
	this.initialize(img.Arquero_00269);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00270 = function() {
	this.initialize(img.Arquero_00270);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00272 = function() {
	this.initialize(img.Arquero_00272);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00273 = function() {
	this.initialize(img.Arquero_00273);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00275 = function() {
	this.initialize(img.Arquero_00275);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00276 = function() {
	this.initialize(img.Arquero_00276);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00278 = function() {
	this.initialize(img.Arquero_00278);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00279 = function() {
	this.initialize(img.Arquero_00279);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00281 = function() {
	this.initialize(img.Arquero_00281);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00282 = function() {
	this.initialize(img.Arquero_00282);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00284 = function() {
	this.initialize(img.Arquero_00284);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00285 = function() {
	this.initialize(img.Arquero_00285);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00287 = function() {
	this.initialize(img.Arquero_00287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00288 = function() {
	this.initialize(img.Arquero_00288);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00290 = function() {
	this.initialize(img.Arquero_00290);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00291 = function() {
	this.initialize(img.Arquero_00291);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00293 = function() {
	this.initialize(img.Arquero_00293);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00294 = function() {
	this.initialize(img.Arquero_00294);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00296 = function() {
	this.initialize(img.Arquero_00296);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00321 = function() {
	this.initialize(img.Arquero_00321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00323 = function() {
	this.initialize(img.Arquero_00323);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00324 = function() {
	this.initialize(img.Arquero_00324);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00326 = function() {
	this.initialize(img.Arquero_00326);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00327 = function() {
	this.initialize(img.Arquero_00327);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00329 = function() {
	this.initialize(img.Arquero_00329);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00330 = function() {
	this.initialize(img.Arquero_00330);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00332 = function() {
	this.initialize(img.Arquero_00332);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00333 = function() {
	this.initialize(img.Arquero_00333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00335 = function() {
	this.initialize(img.Arquero_00335);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00336 = function() {
	this.initialize(img.Arquero_00336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00338 = function() {
	this.initialize(img.Arquero_00338);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00339 = function() {
	this.initialize(img.Arquero_00339);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00341 = function() {
	this.initialize(img.Arquero_00341);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00342 = function() {
	this.initialize(img.Arquero_00342);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00344 = function() {
	this.initialize(img.Arquero_00344);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00345 = function() {
	this.initialize(img.Arquero_00345);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00347 = function() {
	this.initialize(img.Arquero_00347);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00348 = function() {
	this.initialize(img.Arquero_00348);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00350 = function() {
	this.initialize(img.Arquero_00350);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00351 = function() {
	this.initialize(img.Arquero_00351);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00353 = function() {
	this.initialize(img.Arquero_00353);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00354 = function() {
	this.initialize(img.Arquero_00354);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00356 = function() {
	this.initialize(img.Arquero_00356);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00357 = function() {
	this.initialize(img.Arquero_00357);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00359 = function() {
	this.initialize(img.Arquero_00359);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00360 = function() {
	this.initialize(img.Arquero_00360);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00362 = function() {
	this.initialize(img.Arquero_00362);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00363 = function() {
	this.initialize(img.Arquero_00363);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00365 = function() {
	this.initialize(img.Arquero_00365);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00366 = function() {
	this.initialize(img.Arquero_00366);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00368 = function() {
	this.initialize(img.Arquero_00368);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00369 = function() {
	this.initialize(img.Arquero_00369);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00371 = function() {
	this.initialize(img.Arquero_00371);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00372 = function() {
	this.initialize(img.Arquero_00372);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00374 = function() {
	this.initialize(img.Arquero_00374);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00375 = function() {
	this.initialize(img.Arquero_00375);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00377 = function() {
	this.initialize(img.Arquero_00377);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00378 = function() {
	this.initialize(img.Arquero_00378);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00380 = function() {
	this.initialize(img.Arquero_00380);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00381 = function() {
	this.initialize(img.Arquero_00381);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00383 = function() {
	this.initialize(img.Arquero_00383);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00390 = function() {
	this.initialize(img.Arquero_00390);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00392 = function() {
	this.initialize(img.Arquero_00392);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00393 = function() {
	this.initialize(img.Arquero_00393);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00395 = function() {
	this.initialize(img.Arquero_00395);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00396 = function() {
	this.initialize(img.Arquero_00396);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00398 = function() {
	this.initialize(img.Arquero_00398);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00399 = function() {
	this.initialize(img.Arquero_00399);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00401 = function() {
	this.initialize(img.Arquero_00401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00402 = function() {
	this.initialize(img.Arquero_00402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00404 = function() {
	this.initialize(img.Arquero_00404);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00405 = function() {
	this.initialize(img.Arquero_00405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00407 = function() {
	this.initialize(img.Arquero_00407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00408 = function() {
	this.initialize(img.Arquero_00408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00410 = function() {
	this.initialize(img.Arquero_00410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00411 = function() {
	this.initialize(img.Arquero_00411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00413 = function() {
	this.initialize(img.Arquero_00413);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00414 = function() {
	this.initialize(img.Arquero_00414);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00416 = function() {
	this.initialize(img.Arquero_00416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00417 = function() {
	this.initialize(img.Arquero_00417);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00419 = function() {
	this.initialize(img.Arquero_00419);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00420 = function() {
	this.initialize(img.Arquero_00420);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00422 = function() {
	this.initialize(img.Arquero_00422);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00423 = function() {
	this.initialize(img.Arquero_00423);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00425 = function() {
	this.initialize(img.Arquero_00425);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00426 = function() {
	this.initialize(img.Arquero_00426);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00428 = function() {
	this.initialize(img.Arquero_00428);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00429 = function() {
	this.initialize(img.Arquero_00429);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00431 = function() {
	this.initialize(img.Arquero_00431);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00432 = function() {
	this.initialize(img.Arquero_00432);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00434 = function() {
	this.initialize(img.Arquero_00434);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00435 = function() {
	this.initialize(img.Arquero_00435);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00437 = function() {
	this.initialize(img.Arquero_00437);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00438 = function() {
	this.initialize(img.Arquero_00438);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00440 = function() {
	this.initialize(img.Arquero_00440);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00441 = function() {
	this.initialize(img.Arquero_00441);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00443 = function() {
	this.initialize(img.Arquero_00443);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00444 = function() {
	this.initialize(img.Arquero_00444);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00446 = function() {
	this.initialize(img.Arquero_00446);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00447 = function() {
	this.initialize(img.Arquero_00447);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00449 = function() {
	this.initialize(img.Arquero_00449);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00450 = function() {
	this.initialize(img.Arquero_00450);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00452 = function() {
	this.initialize(img.Arquero_00452);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00453 = function() {
	this.initialize(img.Arquero_00453);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00455 = function() {
	this.initialize(img.Arquero_00455);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00456 = function() {
	this.initialize(img.Arquero_00456);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00458 = function() {
	this.initialize(img.Arquero_00458);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00459 = function() {
	this.initialize(img.Arquero_00459);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00461 = function() {
	this.initialize(img.Arquero_00461);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00462 = function() {
	this.initialize(img.Arquero_00462);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00464 = function() {
	this.initialize(img.Arquero_00464);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00465 = function() {
	this.initialize(img.Arquero_00465);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00467 = function() {
	this.initialize(img.Arquero_00467);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00468 = function() {
	this.initialize(img.Arquero_00468);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00470 = function() {
	this.initialize(img.Arquero_00470);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00471 = function() {
	this.initialize(img.Arquero_00471);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00473 = function() {
	this.initialize(img.Arquero_00473);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00474 = function() {
	this.initialize(img.Arquero_00474);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero_00476 = function() {
	this.initialize(img.Arquero_00476);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.bandera_colombia1 = function() {
	this.initialize(img.bandera_colombia1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,122);


(lib.bandera_colombia2 = function() {
	this.initialize(img.bandera_colombia2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,122);


(lib.bandera_colombia3 = function() {
	this.initialize(img.bandera_colombia3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,122);


(lib.bandera_colombia4 = function() {
	this.initialize(img.bandera_colombia4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,122);


(lib.baseBg4 = function() {
	this.initialize(img.baseBg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1136,692);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,592,208);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,239);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,221);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1136,692);


(lib.bola0000 = function() {
	this.initialize(img.bola0000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0002 = function() {
	this.initialize(img.bola0002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0003 = function() {
	this.initialize(img.bola0003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0005 = function() {
	this.initialize(img.bola0005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0006 = function() {
	this.initialize(img.bola0006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0008 = function() {
	this.initialize(img.bola0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0009 = function() {
	this.initialize(img.bola0009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0011 = function() {
	this.initialize(img.bola0011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0012 = function() {
	this.initialize(img.bola0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0014 = function() {
	this.initialize(img.bola0014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0015 = function() {
	this.initialize(img.bola0015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0017 = function() {
	this.initialize(img.bola0017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0018 = function() {
	this.initialize(img.bola0018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.bola0020 = function() {
	this.initialize(img.bola0020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,240);


(lib.FlashAICBAssets = function() {
	this.initialize(img.FlashAICBAssets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,608,224);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.retuculaMAp = function() {
	this.initialize();

	// FlashAICB
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-303.9,-229.9);

	// Layer 1
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(-302.9,-238.9);

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("EgzRAUbMAAAgo1MBmiAAAMAAAAo1g");
	this.shape.setTransform(-4.2,-138.4);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.4,-269.2,656.4,269.3);


(lib.bola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		;
	}
	this.frame_14 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqAKBQkKkKAAl3QAAl2EKkKQEKkKF2AAQF3AAEKEKQEKEKAAF2QAAF3kKEKQkKEKl3AAQl2AAkKkKg");

	// Layer 1
	this.instance = new lib.bola0000();
	this.instance.setTransform(-159.9,-119.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().p("A5nOYIAA8vMAzPAAAIAAcvg");

	this.instance_1 = new lib.bola0002();
	this.instance_1.setTransform(-159.9,-119.9);

	this.instance_2 = new lib.bola0003();
	this.instance_2.setTransform(-159.9,-119.9);

	this.instance_3 = new lib.bola0005();
	this.instance_3.setTransform(-159.9,-119.9);

	this.instance_4 = new lib.bola0006();
	this.instance_4.setTransform(-159.9,-119.9);

	this.instance_5 = new lib.bola0008();
	this.instance_5.setTransform(-159.9,-119.9);

	this.instance_6 = new lib.bola0009();
	this.instance_6.setTransform(-159.9,-119.9);

	this.instance_7 = new lib.bola0011();
	this.instance_7.setTransform(-159.9,-119.9);

	this.instance_8 = new lib.bola0012();
	this.instance_8.setTransform(-159.9,-119.9);

	this.instance_9 = new lib.bola0014();
	this.instance_9.setTransform(-159.9,-119.9);

	this.instance_10 = new lib.bola0015();
	this.instance_10.setTransform(-159.9,-119.9);

	this.instance_11 = new lib.bola0017();
	this.instance_11.setTransform(-159.9,-119.9);

	this.instance_12 = new lib.bola0018();
	this.instance_12.setTransform(-159.9,-119.9);

	this.instance_13 = new lib.bola0020();
	this.instance_13.setTransform(-159.9,-119.9);

	this.instance.mask = this.shape.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-119.9,320,240);


(lib.mc_arco = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.arco();
	this.instance.setTransform(-228.9,-84.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-228.9,-84.4,458,169);


(lib.loop_arquerofdss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Arquero_00392();

	this.instance_1 = new lib.Arquero_00393();

	this.instance_2 = new lib.Arquero_00395();

	this.instance_3 = new lib.Arquero_00396();

	this.instance_4 = new lib.Arquero_00398();

	this.instance_5 = new lib.Arquero_00399();

	this.instance_6 = new lib.Arquero_00401();

	this.instance_7 = new lib.Arquero_00402();

	this.instance_8 = new lib.Arquero_00404();

	this.instance_9 = new lib.Arquero_00405();

	this.instance_10 = new lib.Arquero_00407();

	this.instance_11 = new lib.Arquero_00408();

	this.instance_12 = new lib.Arquero_00410();

	this.instance_13 = new lib.Arquero_00411();

	this.instance_14 = new lib.Arquero_00413();

	this.instance_15 = new lib.Arquero_00414();

	this.instance_16 = new lib.Arquero_00416();

	this.instance_17 = new lib.Arquero_00417();

	this.instance_18 = new lib.Arquero_00419();

	this.instance_19 = new lib.Arquero_00420();

	this.instance_20 = new lib.Arquero_00422();

	this.instance_21 = new lib.Arquero_00423();

	this.instance_22 = new lib.Arquero_00425();

	this.instance_23 = new lib.Arquero_00426();

	this.instance_24 = new lib.Arquero_00428();

	this.instance_25 = new lib.Arquero_00429();

	this.instance_26 = new lib.Arquero_00431();

	this.instance_27 = new lib.Arquero_00432();

	this.instance_28 = new lib.Arquero_00434();

	this.instance_29 = new lib.Arquero_00435();

	this.instance_30 = new lib.Arquero_00437();

	this.instance_31 = new lib.Arquero_00438();

	this.instance_32 = new lib.Arquero_00440();

	this.instance_33 = new lib.Arquero_00441();

	this.instance_34 = new lib.Arquero_00443();

	this.instance_35 = new lib.Arquero_00444();

	this.instance_36 = new lib.Arquero_00446();

	this.instance_37 = new lib.Arquero_00447();

	this.instance_38 = new lib.Arquero_00449();

	this.instance_39 = new lib.Arquero_00450();

	this.instance_40 = new lib.Arquero_00452();

	this.instance_41 = new lib.Arquero_00453();

	this.instance_42 = new lib.Arquero_00455();

	this.instance_43 = new lib.Arquero_00456();

	this.instance_44 = new lib.Arquero_00458();

	this.instance_45 = new lib.Arquero_00459();

	this.instance_46 = new lib.Arquero_00461();

	this.instance_47 = new lib.Arquero_00462();

	this.instance_48 = new lib.Arquero_00464();

	this.instance_49 = new lib.Arquero_00465();

	this.instance_50 = new lib.Arquero_00467();

	this.instance_51 = new lib.Arquero_00468();

	this.instance_52 = new lib.Arquero_00470();

	this.instance_53 = new lib.Arquero_00471();

	this.instance_54 = new lib.Arquero_00473();

	this.instance_55 = new lib.Arquero_00474();

	this.instance_56 = new lib.Arquero_00476();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,620,248);


(lib.Arquero6gfdgfd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop()
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32));

	// Layer 1
	this.instance = new lib.Arquero_00000();
	this.instance.setTransform(1,13.8,0.94,0.94);

	this.instance_1 = new lib.Arquero_00002();
	this.instance_1.setTransform(1,13.8,0.94,0.94);

	this.instance_2 = new lib.Arquero_00003();
	this.instance_2.setTransform(1,13.8,0.94,0.94);

	this.instance_3 = new lib.Arquero_00005();
	this.instance_3.setTransform(1,13.8,0.94,0.94);

	this.instance_4 = new lib.Arquero_00006();
	this.instance_4.setTransform(1,13.8,0.94,0.94);

	this.instance_5 = new lib.Arquero_00008();
	this.instance_5.setTransform(1,13.8,0.94,0.94);

	this.instance_6 = new lib.Arquero_00009();
	this.instance_6.setTransform(1,13.8,0.94,0.94);

	this.instance_7 = new lib.Arquero_00011();
	this.instance_7.setTransform(1,13.8,0.94,0.94);

	this.instance_8 = new lib.Arquero_00012();
	this.instance_8.setTransform(1,13.8,0.94,0.94);

	this.instance_9 = new lib.Arquero_00014();
	this.instance_9.setTransform(1,13.8,0.94,0.94);

	this.instance_10 = new lib.Arquero_00015();
	this.instance_10.setTransform(1,13.8,0.94,0.94);

	this.instance_11 = new lib.Arquero_00017();

	this.instance_12 = new lib.Arquero_00018();

	this.instance_13 = new lib.Arquero_00020();

	this.instance_14 = new lib.Arquero_00021();

	this.instance_15 = new lib.Arquero_00023();

	this.instance_16 = new lib.Arquero_00024();

	this.instance_17 = new lib.Arquero_00026();

	this.instance_18 = new lib.Arquero_00027();
	this.instance_18.setTransform(0,10);

	this.instance_19 = new lib.Arquero_00029();
	this.instance_19.setTransform(0,10,1.021,1.021);

	this.instance_20 = new lib.Arquero_00030();
	this.instance_20.setTransform(0,10,1.021,1.021);

	this.instance_21 = new lib.Arquero_00032();
	this.instance_21.setTransform(0,10,1.021,1.021);

	this.instance_22 = new lib.Arquero_00033();
	this.instance_22.setTransform(0,10,1.021,1.021);

	this.instance_23 = new lib.Arquero_00035();
	this.instance_23.setTransform(0,10,1.021,1.021);

	this.instance_24 = new lib.Arquero_00036();
	this.instance_24.setTransform(0,10,1.021,1.021);

	this.instance_25 = new lib.Arquero_00038();
	this.instance_25.setTransform(0,10,1.021,1.021);

	this.instance_26 = new lib.Arquero_00039();
	this.instance_26.setTransform(0,10,1.021,1.021);

	this.instance_27 = new lib.Arquero_00041();
	this.instance_27.setTransform(0,10,1.021,1.021);

	this.instance_28 = new lib.Arquero_00042();
	this.instance_28.setTransform(0,10,1.021,1.021);

	this.instance_29 = new lib.Arquero_00044();
	this.instance_29.setTransform(0,10,1.021,1.021);

	this.instance_30 = new lib.Arquero_00045();
	this.instance_30.setTransform(0,10,1.021,1.021);

	this.instance_31 = new lib.Arquero_00047();
	this.instance_31.setTransform(0,10,1.021,1.021);

	this.instance_32 = new lib.Arquero_00048();
	this.instance_32.setTransform(0,10,1.021,1.021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,13.8,583,233.2);


(lib.arquero5gfdg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		this.stop()
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42));

	// Layer 1
	this.instance = new lib.Arquero_00321();
	this.instance.setTransform(8.5,20.1,0.902,0.902);

	this.instance_1 = new lib.Arquero_00323();
	this.instance_1.setTransform(8.5,20.1,0.902,0.902);

	this.instance_2 = new lib.Arquero_00324();
	this.instance_2.setTransform(8.5,20.1,0.902,0.902);

	this.instance_3 = new lib.Arquero_00326();
	this.instance_3.setTransform(8.5,20.1,0.902,0.902);

	this.instance_4 = new lib.Arquero_00327();
	this.instance_4.setTransform(8.5,20.1,0.902,0.902);

	this.instance_5 = new lib.Arquero_00329();
	this.instance_5.setTransform(8.5,20.1,0.902,0.902);

	this.instance_6 = new lib.Arquero_00330();
	this.instance_6.setTransform(8.5,20.1,0.902,0.902);

	this.instance_7 = new lib.Arquero_00332();
	this.instance_7.setTransform(8.5,20.1,0.902,0.902);

	this.instance_8 = new lib.Arquero_00333();
	this.instance_8.setTransform(8.5,20.1,0.902,0.902);

	this.instance_9 = new lib.Arquero_00335();
	this.instance_9.setTransform(8.5,20.1,0.902,0.902);

	this.instance_10 = new lib.Arquero_00336();
	this.instance_10.setTransform(8.5,20.1,0.902,0.902);

	this.instance_11 = new lib.Arquero_00338();
	this.instance_11.setTransform(8.5,20.1,0.902,0.902);

	this.instance_12 = new lib.Arquero_00339();
	this.instance_12.setTransform(8.5,20.1,0.902,0.902);

	this.instance_13 = new lib.Arquero_00341();
	this.instance_13.setTransform(8.5,20.1,0.902,0.902);

	this.instance_14 = new lib.Arquero_00342();
	this.instance_14.setTransform(8.5,20.1,0.902,0.902);

	this.instance_15 = new lib.Arquero_00344();
	this.instance_15.setTransform(8.5,20.1,0.902,0.902);

	this.instance_16 = new lib.Arquero_00345();
	this.instance_16.setTransform(8.5,20.1,0.902,0.902);

	this.instance_17 = new lib.Arquero_00347();
	this.instance_17.setTransform(8.5,20.1,0.902,0.902);

	this.instance_18 = new lib.Arquero_00348();
	this.instance_18.setTransform(8.5,20.1,0.902,0.902);

	this.instance_19 = new lib.Arquero_00350();
	this.instance_19.setTransform(8.5,20.1,0.902,0.902);

	this.instance_20 = new lib.Arquero_00351();
	this.instance_20.setTransform(8.5,20.1,0.902,0.902);

	this.instance_21 = new lib.Arquero_00353();
	this.instance_21.setTransform(8.5,20.1,0.902,0.902);

	this.instance_22 = new lib.Arquero_00354();
	this.instance_22.setTransform(8.5,20.1,0.902,0.902);

	this.instance_23 = new lib.Arquero_00356();
	this.instance_23.setTransform(8.5,20.1,0.902,0.902);

	this.instance_24 = new lib.Arquero_00357();
	this.instance_24.setTransform(8.5,20.1,0.902,0.902);

	this.instance_25 = new lib.Arquero_00359();
	this.instance_25.setTransform(8.5,20.1,0.902,0.902);

	this.instance_26 = new lib.Arquero_00360();
	this.instance_26.setTransform(8.5,20.1,0.902,0.902);

	this.instance_27 = new lib.Arquero_00362();
	this.instance_27.setTransform(8.5,20.1,0.902,0.902);

	this.instance_28 = new lib.Arquero_00363();
	this.instance_28.setTransform(8.5,20.1,0.902,0.902);

	this.instance_29 = new lib.Arquero_00365();
	this.instance_29.setTransform(8.5,20.1,0.902,0.902);

	this.instance_30 = new lib.Arquero_00366();
	this.instance_30.setTransform(8.5,20.1,0.902,0.902);

	this.instance_31 = new lib.Arquero_00368();
	this.instance_31.setTransform(8.5,20.1,0.902,0.902);

	this.instance_32 = new lib.Arquero_00369();
	this.instance_32.setTransform(8.5,20.1,0.902,0.902);

	this.instance_33 = new lib.Arquero_00371();
	this.instance_33.setTransform(8.5,20.1,0.902,0.902);

	this.instance_34 = new lib.Arquero_00372();
	this.instance_34.setTransform(8.5,20.1,0.902,0.902);

	this.instance_35 = new lib.Arquero_00374();
	this.instance_35.setTransform(8.5,20.1,0.902,0.902);

	this.instance_36 = new lib.Arquero_00375();
	this.instance_36.setTransform(8.5,20.1,0.902,0.902);

	this.instance_37 = new lib.Arquero_00377();
	this.instance_37.setTransform(8.5,20.1,0.902,0.902);

	this.instance_38 = new lib.Arquero_00378();
	this.instance_38.setTransform(8.5,20.1,0.902,0.902);

	this.instance_39 = new lib.Arquero_00380();
	this.instance_39.setTransform(8.5,20.1,0.902,0.902);

	this.instance_40 = new lib.Arquero_00381();
	this.instance_40.setTransform(8.5,20.1,0.902,0.902);

	this.instance_41 = new lib.Arquero_00383();
	this.instance_41.setTransform(8.5,20.1,0.902,0.902);

	this.instance_42 = new lib.Arquero_00390();
	this.instance_42.setTransform(8.5,20.1,0.902,0.902);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,20.1,559.4,223.8);


(lib.arquero4gfdgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_33 = function() {
		this.stop()
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33));

	// Layer 1
	this.instance = new lib.Arquero_00051();
	this.instance.setTransform(29.9,15.4,0.909,0.919);

	this.instance_1 = new lib.Arquero_00053();
	this.instance_1.setTransform(29.9,15.4,0.909,0.919);

	this.instance_2 = new lib.Arquero_00054();
	this.instance_2.setTransform(29.9,15.4,0.909,0.919);

	this.instance_3 = new lib.Arquero_00056();
	this.instance_3.setTransform(29.9,15.4,0.909,0.919);

	this.instance_4 = new lib.Arquero_00057();
	this.instance_4.setTransform(29.9,15.4,0.909,0.919);

	this.instance_5 = new lib.Arquero_00059();
	this.instance_5.setTransform(29.9,15.4,0.909,0.919);

	this.instance_6 = new lib.Arquero_00060();
	this.instance_6.setTransform(29.9,15.4,0.909,0.919);

	this.instance_7 = new lib.Arquero_00062();
	this.instance_7.setTransform(29.9,15.4,0.909,0.919);

	this.instance_8 = new lib.Arquero_00063();
	this.instance_8.setTransform(29.9,15.4,0.909,0.919);

	this.instance_9 = new lib.Arquero_00065();
	this.instance_9.setTransform(17,12,0.94,0.94);

	this.instance_10 = new lib.Arquero_00066();
	this.instance_10.setTransform(17,12,0.94,0.94);

	this.instance_11 = new lib.Arquero_00068();

	this.instance_12 = new lib.Arquero_00069();

	this.instance_13 = new lib.Arquero_00071();

	this.instance_14 = new lib.Arquero_00072();

	this.instance_15 = new lib.Arquero_00074();

	this.instance_16 = new lib.Arquero_00075();
	this.instance_16.setTransform(0,10);

	this.instance_17 = new lib.Arquero_00077();
	this.instance_17.setTransform(0,10);

	this.instance_18 = new lib.Arquero_00078();
	this.instance_18.setTransform(0,10);

	this.instance_19 = new lib.Arquero_00080();
	this.instance_19.setTransform(0,10);

	this.instance_20 = new lib.Arquero_00081();
	this.instance_20.setTransform(0,10);

	this.instance_21 = new lib.Arquero_00083();
	this.instance_21.setTransform(0,10);

	this.instance_22 = new lib.Arquero_00084();
	this.instance_22.setTransform(0,10);

	this.instance_23 = new lib.Arquero_00086();
	this.instance_23.setTransform(0,10);

	this.instance_24 = new lib.Arquero_00087();
	this.instance_24.setTransform(0,17);

	this.instance_25 = new lib.Arquero_00089();
	this.instance_25.setTransform(-23.9,12,1.037,1.037);

	this.instance_26 = new lib.Arquero_00090();
	this.instance_26.setTransform(-23.9,12,1.037,1.037);

	this.instance_27 = new lib.Arquero_00092();
	this.instance_27.setTransform(-23.9,12,1.037,1.037);

	this.instance_28 = new lib.Arquero_00093();
	this.instance_28.setTransform(-23.9,12,1.037,1.037);

	this.instance_29 = new lib.Arquero_00095();
	this.instance_29.setTransform(-23.9,12,1.037,1.037);

	this.instance_30 = new lib.Arquero_00096();
	this.instance_30.setTransform(-23.9,12,1.037,1.037);

	this.instance_31 = new lib.Arquero_00098();
	this.instance_31.setTransform(-23.9,12,1.037,1.037);

	this.instance_32 = new lib.Arquero_00099();
	this.instance_32.setTransform(-23.9,12,1.037,1.037);

	this.instance_33 = new lib.Arquero_00101();
	this.instance_33.setTransform(-23.9,12,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.9,15.4,563.3,228.1);


(lib.arquero2fdsfds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		this.stop()
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42));

	// Layer 1
	this.instance = new lib.Arquero_00233();
	this.instance.setTransform(39.4,24.6,0.881,0.881);

	this.instance_1 = new lib.Arquero_00234();
	this.instance_1.setTransform(39.4,24.6,0.881,0.881);

	this.instance_2 = new lib.Arquero_00236();
	this.instance_2.setTransform(39.4,24.6,0.881,0.881);

	this.instance_3 = new lib.Arquero_00237();
	this.instance_3.setTransform(39.4,24.6,0.881,0.881);

	this.instance_4 = new lib.Arquero_00239();
	this.instance_4.setTransform(39.4,24.6,0.881,0.881);

	this.instance_5 = new lib.Arquero_00240();
	this.instance_5.setTransform(39.4,24.6,0.881,0.881);

	this.instance_6 = new lib.Arquero_00242();
	this.instance_6.setTransform(39.4,24.6,0.881,0.881);

	this.instance_7 = new lib.Arquero_00243();
	this.instance_7.setTransform(39.4,24.6,0.881,0.881);

	this.instance_8 = new lib.Arquero_00245();
	this.instance_8.setTransform(39.4,24.6,0.881,0.881);

	this.instance_9 = new lib.Arquero_00246();
	this.instance_9.setTransform(39.4,24.6,0.881,0.881);

	this.instance_10 = new lib.Arquero_00248();
	this.instance_10.setTransform(39.4,24.6,0.881,0.881);

	this.instance_11 = new lib.Arquero_00249();
	this.instance_11.setTransform(39.4,24.6,0.881,0.881);

	this.instance_12 = new lib.Arquero_00251();
	this.instance_12.setTransform(39.4,24.6,0.881,0.881);

	this.instance_13 = new lib.Arquero_00252();
	this.instance_13.setTransform(39.4,24.6,0.881,0.881);

	this.instance_14 = new lib.Arquero_00254();
	this.instance_14.setTransform(39.4,24.6,0.881,0.881);

	this.instance_15 = new lib.Arquero_00255();
	this.instance_15.setTransform(39.4,24.6,0.881,0.881);

	this.instance_16 = new lib.Arquero_00257();
	this.instance_16.setTransform(39.4,24.6,0.881,0.881);

	this.instance_17 = new lib.Arquero_00258();
	this.instance_17.setTransform(39.4,24.6,0.881,0.881);

	this.instance_18 = new lib.Arquero_00260();
	this.instance_18.setTransform(39.4,24.6,0.881,0.881);

	this.instance_19 = new lib.Arquero_00261();
	this.instance_19.setTransform(39.4,24.6,0.881,0.881);

	this.instance_20 = new lib.Arquero_00263();
	this.instance_20.setTransform(39.4,24.6,0.881,0.881);

	this.instance_21 = new lib.Arquero_00264();
	this.instance_21.setTransform(39.4,24.6,0.881,0.881);

	this.instance_22 = new lib.Arquero_00266();
	this.instance_22.setTransform(39.4,24.6,0.881,0.881);

	this.instance_23 = new lib.Arquero_00267();
	this.instance_23.setTransform(39.4,24.6,0.881,0.881);

	this.instance_24 = new lib.Arquero_00269();
	this.instance_24.setTransform(39.4,24.6,0.881,0.881);

	this.instance_25 = new lib.Arquero_00270();
	this.instance_25.setTransform(39.4,24.6,0.881,0.881);

	this.instance_26 = new lib.Arquero_00272();
	this.instance_26.setTransform(39.4,24.6,0.881,0.881);

	this.instance_27 = new lib.Arquero_00273();
	this.instance_27.setTransform(39.4,24.6,0.881,0.881);

	this.instance_28 = new lib.Arquero_00275();
	this.instance_28.setTransform(39.4,24.6,0.881,0.881);

	this.instance_29 = new lib.Arquero_00276();
	this.instance_29.setTransform(39.4,24.6,0.881,0.881);

	this.instance_30 = new lib.Arquero_00278();
	this.instance_30.setTransform(39.4,24.6,0.881,0.881);

	this.instance_31 = new lib.Arquero_00279();
	this.instance_31.setTransform(39.4,24.6,0.881,0.881);

	this.instance_32 = new lib.Arquero_00281();
	this.instance_32.setTransform(39.4,24.6,0.881,0.881);

	this.instance_33 = new lib.Arquero_00282();
	this.instance_33.setTransform(39.4,24.6,0.881,0.881);

	this.instance_34 = new lib.Arquero_00284();
	this.instance_34.setTransform(39.4,24.6,0.881,0.881);

	this.instance_35 = new lib.Arquero_00285();
	this.instance_35.setTransform(39.4,24.6,0.881,0.881);

	this.instance_36 = new lib.Arquero_00287();
	this.instance_36.setTransform(39.4,24.6,0.881,0.881);

	this.instance_37 = new lib.Arquero_00288();
	this.instance_37.setTransform(39.4,24.6,0.881,0.881);

	this.instance_38 = new lib.Arquero_00290();
	this.instance_38.setTransform(39.4,24.6,0.881,0.881);

	this.instance_39 = new lib.Arquero_00291();
	this.instance_39.setTransform(39.4,24.6,0.881,0.881);

	this.instance_40 = new lib.Arquero_00293();
	this.instance_40.setTransform(39.4,24.6,0.881,0.881);

	this.instance_41 = new lib.Arquero_00294();
	this.instance_41.setTransform(39.4,24.6,0.881,0.881);

	this.instance_42 = new lib.Arquero_00296();
	this.instance_42.setTransform(39.4,24.6,0.881,0.881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.4,24.6,546.3,218.5);


(lib.arquero3fdsfds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop()
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39));

	// Layer 1
	this.instance = new lib.Arquero_00102();
	this.instance.setTransform(23.7,22.4,0.894,0.894);

	this.instance_1 = new lib.Arquero_00104();
	this.instance_1.setTransform(23.7,22.4,0.894,0.894);

	this.instance_2 = new lib.Arquero_00105();
	this.instance_2.setTransform(23.7,22.4,0.894,0.894);

	this.instance_3 = new lib.Arquero_00107();
	this.instance_3.setTransform(23.7,22.4,0.894,0.894);

	this.instance_4 = new lib.Arquero_00108();
	this.instance_4.setTransform(13.9,16.2,0.919,0.919);

	this.instance_5 = new lib.Arquero_00110();
	this.instance_5.setTransform(13.9,16.2,0.919,0.919);

	this.instance_6 = new lib.Arquero_00111();
	this.instance_6.setTransform(13.9,16.2,0.919,0.919);

	this.instance_7 = new lib.Arquero_00113();

	this.instance_8 = new lib.Arquero_00114();

	this.instance_9 = new lib.Arquero_00116();

	this.instance_10 = new lib.Arquero_00117();

	this.instance_11 = new lib.Arquero_00119();

	this.instance_12 = new lib.Arquero_00120();

	this.instance_13 = new lib.Arquero_00122();

	this.instance_14 = new lib.Arquero_00123();

	this.instance_15 = new lib.Arquero_00125();

	this.instance_16 = new lib.Arquero_00126();
	this.instance_16.setTransform(0,12);

	this.instance_17 = new lib.Arquero_00128();
	this.instance_17.setTransform(0,12);

	this.instance_18 = new lib.Arquero_00129();
	this.instance_18.setTransform(0,12);

	this.instance_19 = new lib.Arquero_00131();
	this.instance_19.setTransform(0,12);

	this.instance_20 = new lib.Arquero_00132();
	this.instance_20.setTransform(0,12);

	this.instance_21 = new lib.Arquero_00134();
	this.instance_21.setTransform(0,12);

	this.instance_22 = new lib.Arquero_00135();
	this.instance_22.setTransform(0,12);

	this.instance_23 = new lib.Arquero_00137();
	this.instance_23.setTransform(0,12);

	this.instance_24 = new lib.Arquero_00138();
	this.instance_24.setTransform(0,12);

	this.instance_25 = new lib.Arquero_00140();
	this.instance_25.setTransform(0,12);

	this.instance_26 = new lib.Arquero_00141();
	this.instance_26.setTransform(0,12);

	this.instance_27 = new lib.Arquero_00143();
	this.instance_27.setTransform(0,12);

	this.instance_28 = new lib.Arquero_00144();
	this.instance_28.setTransform(0,12);

	this.instance_29 = new lib.Arquero_00146();
	this.instance_29.setTransform(0,12);

	this.instance_30 = new lib.Arquero_00147();
	this.instance_30.setTransform(0,12);

	this.instance_31 = new lib.Arquero_00149();
	this.instance_31.setTransform(0,12);

	this.instance_32 = new lib.Arquero_00150();
	this.instance_32.setTransform(0,12);

	this.instance_33 = new lib.Arquero_00152();
	this.instance_33.setTransform(0,12);

	this.instance_34 = new lib.Arquero_00153();
	this.instance_34.setTransform(0,12);

	this.instance_35 = new lib.Arquero_00155();
	this.instance_35.setTransform(0,12);

	this.instance_36 = new lib.Arquero_00156();
	this.instance_36.setTransform(0,12);

	this.instance_37 = new lib.Arquero_00158();
	this.instance_37.setTransform(0,12);

	this.instance_38 = new lib.Arquero_00159();
	this.instance_38.setTransform(0,12);

	this.instance_39 = new lib.Arquero_00165();
	this.instance_39.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.7,22.4,554.1,221.7);


(lib.arquero1fdsf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop()
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43));

	// Layer 1
	this.instance = new lib.Arquero_00167();
	this.instance.setTransform(12,12.2,0.939,0.939);

	this.instance_1 = new lib.Arquero_00168();
	this.instance_1.setTransform(12,12.2,0.939,0.939);

	this.instance_2 = new lib.Arquero_00170();
	this.instance_2.setTransform(12,12.2,0.939,0.939);

	this.instance_3 = new lib.Arquero_00171();
	this.instance_3.setTransform(12,12.2,0.939,0.939);

	this.instance_4 = new lib.Arquero_00173();
	this.instance_4.setTransform(12,12.2,0.939,0.939);

	this.instance_5 = new lib.Arquero_00174();
	this.instance_5.setTransform(12,12.2,0.939,0.939);

	this.instance_6 = new lib.Arquero_00176();

	this.instance_7 = new lib.Arquero_00177();
	this.instance_7.setTransform(0,1,0.992,0.992);

	this.instance_8 = new lib.Arquero_00179();
	this.instance_8.setTransform(0,1,0.992,0.992);

	this.instance_9 = new lib.Arquero_00180();

	this.instance_10 = new lib.Arquero_00182();

	this.instance_11 = new lib.Arquero_00183();

	this.instance_12 = new lib.Arquero_00185();

	this.instance_13 = new lib.Arquero_00186();

	this.instance_14 = new lib.Arquero_00188();

	this.instance_15 = new lib.Arquero_00189();

	this.instance_16 = new lib.Arquero_00191();

	this.instance_17 = new lib.Arquero_00192();

	this.instance_18 = new lib.Arquero_00194();

	this.instance_19 = new lib.Arquero_00195();

	this.instance_20 = new lib.Arquero_00197();

	this.instance_21 = new lib.Arquero_00198();

	this.instance_22 = new lib.Arquero_00200();

	this.instance_23 = new lib.Arquero_00201();
	this.instance_23.setTransform(0,9);

	this.instance_24 = new lib.Arquero_00203();
	this.instance_24.setTransform(0,9);

	this.instance_25 = new lib.Arquero_00204();
	this.instance_25.setTransform(0,9);

	this.instance_26 = new lib.Arquero_00206();
	this.instance_26.setTransform(0,9);

	this.instance_27 = new lib.Arquero_00207();
	this.instance_27.setTransform(0,9);

	this.instance_28 = new lib.Arquero_00209();
	this.instance_28.setTransform(0,9);

	this.instance_29 = new lib.Arquero_00210();
	this.instance_29.setTransform(0,9);

	this.instance_30 = new lib.Arquero_00212();
	this.instance_30.setTransform(0,9);

	this.instance_31 = new lib.Arquero_00213();
	this.instance_31.setTransform(0,9);

	this.instance_32 = new lib.Arquero_00215();
	this.instance_32.setTransform(0,9);

	this.instance_33 = new lib.Arquero_00216();
	this.instance_33.setTransform(0,9);

	this.instance_34 = new lib.Arquero_00218();
	this.instance_34.setTransform(0,9);

	this.instance_35 = new lib.Arquero_00219();
	this.instance_35.setTransform(0,9);

	this.instance_36 = new lib.Arquero_00221();
	this.instance_36.setTransform(0,9);

	this.instance_37 = new lib.Arquero_00222();
	this.instance_37.setTransform(0,9);

	this.instance_38 = new lib.Arquero_00224();
	this.instance_38.setTransform(0,9);

	this.instance_39 = new lib.Arquero_00225();
	this.instance_39.setTransform(0,9);

	this.instance_40 = new lib.Arquero_00227();
	this.instance_40.setTransform(0,9);

	this.instance_41 = new lib.Arquero_00228();
	this.instance_41.setTransform(0,9);

	this.instance_42 = new lib.Arquero_00230();
	this.instance_42.setTransform(0,9);

	this.instance_43 = new lib.Arquero_00231();
	this.instance_43.setTransform(0,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,12.2,582,232.8);


(lib.ball_78C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1


// JavaScript Document

	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-86.2,y:-106.2,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-105.1,y:-176.2,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-134.5,y:-242.4,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-174,y:-303.1,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-222.5,y:-357.1,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-278,y:-403.6,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-339.1,y:-442.7,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-404.1,y:-474.9,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-413.8,y:-476.9,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-423.7,y:-478.1,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-433.7,y:-478.5,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-443.7,y:-477.6,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-453.4,y:-475.2,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-462.2,y:-470.5,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-469,y:-463.3,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-468.9,y:-463.8,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-471.1,y:-460.5,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-473.1,y:-457.4,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-475.1,y:-454.2,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-476.8,y:-451.6,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-479.2,y:-447.9,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_78B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-119.6,y:-82},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-160.4,y:-126.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-199.8,y:-171.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-237.8,y:-218.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-274.3,y:-266.2},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-309.6,y:-315},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-343.8,y:-364.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-377,y:-414.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-409.5,y:-465.4},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-410.6,y:-468.2,alpha:0.941},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-411.5,y:-471.2,alpha:0.882},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-412.2,y:-474.1,alpha:0.824},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-412.6,y:-477.2,alpha:0.765},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-412.9,y:-480.2,alpha:0.706},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-413,y:-483.3,alpha:0.647},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-412.9,y:-486.4,alpha:0.588},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-412.4,y:-487.7,alpha:0.529},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-411.8,y:-489,alpha:0.471},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-411.2,y:-490.3,alpha:0.412},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-410.5,y:-491.6,alpha:0.353},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-409.8,y:-492.8,alpha:0.294},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-408.9,y:-494,alpha:0.235},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-408.1,y:-495,alpha:0.176},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-407.4,y:-495.9,alpha:0.118},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-406.6,y:-496.6,alpha:0.059},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-404.9,y:-498,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_78A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27)).call(kickEnd);

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-144.5,y:-64.8,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-206.8,y:-99.8,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-263.3,y:-143.9,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-311.9,y:-196.4,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-351.2,y:-256.2,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-379.6,y:-321.8,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-395.5,y:-391.6,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-396.8,y:-463.1,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-396.6,y:-466.7,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-395.8,y:-470.1,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-394.5,y:-473.5,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-392.8,y:-476.6,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-390.8,y:-479.6,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-388.5,y:-482.4,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-386.1,y:-484.9,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-383.5,y:-487.3,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-380.5,y:-489.6,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-377.6,y:-491.7,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-374.6,y:-493.6,alpha:0.401},0).wait(1).to({x:-371.1,y:-494.2,alpha:0.369},0).wait(1).to({x:-367.5,y:-494.3,alpha:0.338},0).wait(1).to({x:-364,y:-494,alpha:0.306},0).wait(1).to({x:-360.5,y:-493.4,alpha:0.275},0).wait(1).to({x:-356.9,y:-492.4,alpha:0.243},0).wait(1).to({x:-353.6,y:-491.1,alpha:0.212},0).wait(1).to({x:-350.4,y:-489.4,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_77C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-85.6,y:-103.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-103.1,y:-170.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-131.4,y:-234},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-170.3,y:-291.6},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-218.3,y:-341.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-273.2,y:-384.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-332.8,y:-420.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-395.5,y:-450.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-405.7,y:-454.3,alpha:0.923},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-416.1,y:-457.4,alpha:0.846},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-426.6,y:-459.8,alpha:0.769},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-437.3,y:-461.3,alpha:0.692},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-448.1,alpha:0.615},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-458.7,y:-459,alpha:0.538},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-467.1,y:-452.4,alpha:0.462},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-468.7,y:-449.7,alpha:0.385},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-470.2,y:-446.9,alpha:0.308},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-471.6,y:-444.1,alpha:0.231},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-472.9,y:-441.1,alpha:0.154},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-474.1,y:-438.1,alpha:0.077},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-475.2,y:-435.1,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_77B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-119.6,y:-82},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-160.4,y:-126.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-199.8,y:-171.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-237.8,y:-218.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-274.3,y:-266.2},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-309.6,y:-315},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-343.8,y:-364.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-377,y:-414.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-409.5,y:-465.4},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-410.6,y:-468.2,alpha:0.941},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-411.5,y:-471.2,alpha:0.882},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-412.2,y:-474.1,alpha:0.824},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-412.6,y:-477.2,alpha:0.765},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-412.9,y:-480.2,alpha:0.706},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-413,y:-483.3,alpha:0.647},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-412.9,y:-486.4,alpha:0.588},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-412.4,y:-487.7,alpha:0.529},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-411.8,y:-489,alpha:0.471},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-411.2,y:-490.3,alpha:0.412},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-410.5,y:-491.6,alpha:0.353},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-409.8,y:-492.8,alpha:0.294},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-408.9,y:-494,alpha:0.235},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-408.1,y:-495,alpha:0.176},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-407.4,y:-495.9,alpha:0.118},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-406.6,y:-496.6,alpha:0.059},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-404.9,y:-498,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_77A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-145,y:-63.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-206.7,y:-98.9,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-260.9,y:-145.4,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-306.3,y:-200.7,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-342.8,y:-262.1,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-371.4,y:-327.7,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-393.2,y:-395.7,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-409.5,y:-465.4,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-410.1,y:-477,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-408.3,y:-488.5,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-404.1,y:-499.3,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-397.4,y:-508.7,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-388.4,y:-516.1,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-378,y:-521.3,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-366.9,y:-524.5,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-355.4,y:-526.2,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-343.8,y:-526.7,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-332.1,y:-526.3,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-320.6,y:-525.1,alpha:0.401},0).wait(1).to({x:-317.6,y:-524.4,alpha:0.369},0).wait(1).to({x:-314.8,y:-523.3,alpha:0.338},0).wait(1).to({x:-312.1,y:-522.1,alpha:0.306},0).wait(1).to({x:-309.6,y:-520.6,alpha:0.275},0).wait(1).to({x:-307,y:-518.8,alpha:0.243},0).wait(1).to({x:-304.8,y:-516.9,alpha:0.212},0).wait(1).to({x:-302.7,y:-514.6,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_76C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-47.5,y:-92.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-41.4,y:-157.4},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-58.1,y:-220.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-89.9,y:-278.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-130.6,y:-329.9},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-176.9,y:-376.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-227.2,y:-419},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-280.4,y:-457.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-286.3,y:-459.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-292.4,y:-461.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-298.5,y:-462.5},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-304.7,y:-463.5},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-310.9,y:-464.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-317.1,y:-464.8},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-323.4,y:-465},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-329.6},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-335.9,y:-464.7},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-339.4,y:-463.9,alpha:0.833},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-342.8,y:-462.7,alpha:0.667},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-346,y:-461.2,alpha:0.5},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-349.1,y:-459.1,alpha:0.333},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-351.7,y:-456.7,alpha:0.167},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-353.8,y:-453.7,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_76B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-106.5,y:-99.9,alpha:0.957},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-135.3,y:-161,alpha:0.913},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-164.2,y:-222.1,alpha:0.87},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-193.1,y:-283.2,alpha:0.826},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-222.2,y:-344.2,alpha:0.783},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-251.5,y:-405.2,alpha:0.739},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-282.2,y:-465.4,alpha:0.696},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-284.4,y:-467.5,alpha:0.652},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-286.6,y:-469.4,alpha:0.609},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-288.9,y:-471.1,alpha:0.565},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-291.4,y:-472.5,alpha:0.522},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-294.2,y:-473.3,alpha:0.478},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-297,y:-473.5,alpha:0.435},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-300,y:-473.3,alpha:0.391},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-300.7,y:-473.2,alpha:0.348},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-301.4,y:-473,alpha:0.304},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-302.1,y:-472.8,alpha:0.261},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-302.8,y:-472.6,alpha:0.217},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-303.5,y:-472.3,alpha:0.174},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-304.1,y:-471.9,alpha:0.13},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-304.8,y:-471.5,alpha:0.087},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-305.4,y:-471.1,alpha:0.043},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-306,y:-470.7,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_76A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-124.2,y:-63.6,alpha:0.968},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-168.8,y:-91.6,alpha:0.937},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-210.5,y:-123.9,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-246.8,y:-161.9,alpha:0.874},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-274.9,y:-206.3,alpha:0.842},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-292.3,y:-256,alpha:0.811},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-299.9,y:-308,alpha:0.779},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-300.3,y:-360.7,alpha:0.748},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-296.4,y:-413.2,alpha:0.716},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-289.9,y:-465.5,alpha:0.685},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-289.1,y:-469.4,alpha:0.653},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-287.8,y:-473.2,alpha:0.622},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-286.2,y:-476.7,alpha:0.59},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-284,y:-480,alpha:0.558},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-281.3,y:-482.9,alpha:0.527},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-278.1,y:-485.2,alpha:0.495},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-274.4,y:-486.7,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-270.6,y:-487.5,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-266.5,y:-487.6,alpha:0.401},0).wait(1).to({x:-265.3,y:-487.4,alpha:0.369},0).wait(1).to({x:-264.1,y:-487,alpha:0.338},0).wait(1).to({x:-263,y:-486.4,alpha:0.306},0).wait(1).to({x:-262.1,y:-485.6,alpha:0.275},0).wait(1).to({x:-261.6,y:-484.8,alpha:0.243},0).wait(1).to({x:-261.3,y:-484,alpha:0.212},0).wait(1).to({x:-261.2,y:-482,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_75C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-65.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-39.5,y:-78.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-24.7,y:-127.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-22,y:-179.1},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-30.2,y:-229.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-47.6,y:-278.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-72.6,y:-323.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-103.7,y:-364.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-140.1,y:-400.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-180.9,y:-432.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-225.7,y:-457.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-229.4,y:-458.5},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-233.1,y:-458.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-236.8,y:-459.1},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-240.5},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-244.2,y:-458.7},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-247.8,y:-457.8},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-251.3,y:-456.5},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-253.4,y:-454.7,alpha:0.833},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-255.3,y:-452.7,alpha:0.667},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-256.9,y:-450.6,alpha:0.5},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-258.1,y:-448,alpha:0.333},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-258.9,y:-445.4,alpha:0.167},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-259.3,y:-442.7,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-77.6,86.3,86.3);


(lib.ball_75B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-99.9,y:-99.9,alpha:0.957},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-122.1,y:-161.1,alpha:0.913},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-144.3,y:-222.2,alpha:0.87},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-166.7,y:-283.2,alpha:0.826},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-189.2,y:-344.3,alpha:0.783},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-212.1,y:-405.2,alpha:0.739},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-236.7,y:-465.4,alpha:0.696},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-239,y:-467.6,alpha:0.652},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-241.4,y:-469.6,alpha:0.609},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-243.9,y:-471.4,alpha:0.565},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-246.7,y:-472.9,alpha:0.522},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-249.6,y:-473.8,alpha:0.478},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-252.7,y:-474.1,alpha:0.435},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-255.9,y:-474,alpha:0.391},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-256.5,y:-473.9,alpha:0.348},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-257.2,y:-473.7,alpha:0.304},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-257.8,y:-473.5,alpha:0.261},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-258.3,y:-473.1,alpha:0.217},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-258.9,y:-472.8,alpha:0.174},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-259.3,y:-472.3,alpha:0.13},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-259.8,y:-471.8,alpha:0.087},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-260.2,y:-471.3,alpha:0.043},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-260.5,y:-470.7,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_75A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-124.9,y:-51.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-164.5,y:-79.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-194.7,y:-118.3},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-216.9,y:-162.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-232.8,y:-208.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-243.8,y:-256.4},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-250.8,y:-304.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-254.5,y:-353.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-255.5,y:-403},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-254.2,y:-452.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-252.4,y:-457.7},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-248.7,y:-462.4},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-244.1,y:-466.2},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-239.1,y:-469.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-233.8,y:-472.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-230.8,y:-472.1,alpha:0.875},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-228.2,y:-471.9,alpha:0.75},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-225.5,y:-471.5,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-222.9,y:-470.7,alpha:0.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-220.6,y:-469.4,alpha:0.375},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-218.6,y:-467.6,alpha:0.25},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-217.1,y:-465.7,alpha:0.125},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-215.5,y:-462.9,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_74C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-50.9,y:-76.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-32.3,y:-123.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-22.5,y:-172.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-21.8,y:-223.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-30,y:-272.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-46.8,y:-320.2},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-71.7,y:-363.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-103.8,y:-402.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-142.1,y:-435.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-185.4,y:-460.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-189.2,y:-461.5},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-192.8,y:-461.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-196.5,y:-462.1},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-200.3},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-204,y:-461.7},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-207.6,y:-460.8},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-211,y:-459.5},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-213.1,y:-457.7,alpha:0.833},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-215,y:-455.7,alpha:0.667},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-216.6,y:-453.6,alpha:0.5},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-217.9,y:-451,alpha:0.333},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-218.7,y:-448.4,alpha:0.167},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-219.1,y:-445.7,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_74B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-93.5,y:-99.7,alpha:0.957},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-109.2,y:-160.8,alpha:0.913},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-125,y:-221.8,alpha:0.87},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-140.9,y:-282.8,alpha:0.826},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-156.8,y:-343.8,alpha:0.783},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-173,y:-404.7,alpha:0.739},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-190.1,y:-465.4,alpha:0.696},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-192.3,y:-469,alpha:0.652},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-195.1,y:-472.2,alpha:0.609},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-198.2,y:-474.9,alpha:0.565},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-201.7,y:-477.2,alpha:0.522},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-205.5,y:-479.1,alpha:0.478},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-209.6,y:-480.2,alpha:0.435},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-213.7,y:-480.5,alpha:0.391},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-215.7,y:-480.1,alpha:0.348},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-217.4,y:-479.6,alpha:0.304},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-219.2,y:-479,alpha:0.261},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-220.8,y:-478.1,alpha:0.217},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-222.3,y:-476.9,alpha:0.174},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-223.6,y:-475.5,alpha:0.13},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-224.5,y:-473.9,alpha:0.087},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-225.2,y:-472.2,alpha:0.043},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-225.5,y:-470.3,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_74A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-122.2,y:-51.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-155,y:-84.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-174.8,y:-126.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-186.4,y:-172.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-193.1,y:-218.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-196.8,y:-265},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-198.4,y:-311.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-198.5,y:-358.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-197.4,y:-405.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-195.5,y:-452.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-194.4,y:-457.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-191.9,y:-461.7},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-188.6,y:-465.7},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-184.8,y:-469.2},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-180.5,y:-472.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-177.7,y:-472.1,alpha:0.875},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-175.5,y:-472,alpha:0.75},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-173.2,y:-471.6,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-171,y:-470.7,alpha:0.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-169.1,y:-469.1,alpha:0.375},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-167.7,y:-467.2,alpha:0.25},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-166.7,y:-465.5,alpha:0.125},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-165.3,y:-462.9,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_73C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-70.5,y:-78.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-64,y:-123.2},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-58.7,y:-167.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-55.3,y:-212.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-54.7,y:-257.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-58.2,y:-302.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-67.1,y:-346.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-82.5,y:-388.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-104.6,y:-428},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-132.7,y:-463.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-136.4,y:-463.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-140.1,y:-464.3},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-143.8,y:-464.5},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-147.5},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-151.2,y:-464.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-154.8,y:-463.2},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-158.3,y:-461.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-160.4,y:-460.1,alpha:0.833},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-162.3,y:-458.1,alpha:0.667},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-163.9,y:-456,alpha:0.5},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-165.1,y:-453.4,alpha:0.333},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-165.9,y:-450.8,alpha:0.167},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-166.3,y:-448.1,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_73B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-83.6,y:-86.3,alpha:0.957},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-89.5,y:-133.8,alpha:0.913},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-95.3,y:-181.4,alpha:0.87},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-101.2,y:-228.9,alpha:0.826},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-107.2,y:-276.4,alpha:0.783},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-113.2,y:-324,alpha:0.739},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-119.2,y:-371.5,alpha:0.696},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-125.3,y:-419,alpha:0.652},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-132.2,y:-466.4,alpha:0.609},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-133,y:-469,alpha:0.565},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-133.8,y:-471.4,alpha:0.522},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-135,y:-473.6,alpha:0.478},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-136.8,y:-475.3,alpha:0.435},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-139.2,y:-475.7,alpha:0.391},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-141.8,y:-475.3,alpha:0.348},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-144.3,y:-474.8,alpha:0.304},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-145.9,y:-474.4,alpha:0.261},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-147.4,y:-473.6,alpha:0.217},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-148.7,y:-472.7,alpha:0.174},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-149.9,y:-471.5,alpha:0.13},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-151,y:-470.3,alpha:0.087},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-152,y:-468.9,alpha:0.043},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-152.8,y:-467.5,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_73A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-100,y:-76.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-119.3,y:-115.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-135.6,y:-156.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-148.7,y:-198.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-158.6,y:-241},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-165.2,y:-284.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-168.3,y:-328},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-167.8,y:-371.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-163.4,y:-415.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-154.8,y:-458.4},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-152.9,y:-463.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-150.3,y:-467.5},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-147.2,y:-471.5},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-143.7,y:-475.2},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-139.7,y:-478.5},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-136.9,y:-478.4,alpha:0.875},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-134.7,y:-478.3,alpha:0.75},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-132.4,y:-477.9,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-130.2,y:-477,alpha:0.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-128.4,y:-475.4,alpha:0.375},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-127,y:-473.5,alpha:0.25},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-126,y:-471.8,alpha:0.125},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-124.6,y:-469.2,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_72C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-60,y:-79},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-45.7,y:-120.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-35.4,y:-163.4},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-29.5,y:-206.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-28.3,y:-250.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-31.9,y:-294.7},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-40.1,y:-337.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-52.7,y:-380.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-69.2,y:-420.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-88.9,y:-460.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-91.2,y:-464.8},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-93.4,y:-469.3},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-95.8,y:-473.7},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-98.9,y:-477.7},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-103.4,y:-480},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-107.2,y:-479.4,alpha:0.875},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-110.2,y:-476.9,alpha:0.75},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-112.4,y:-473.7,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-114.2,y:-470.2,alpha:0.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-115.6,y:-466.6,alpha:0.375},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-116.7,y:-462.7,alpha:0.25},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-117.6,y:-458.9,alpha:0.125},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-118.3,y:-455,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_72B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-79.6,y:-80},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-81.4,y:-121.4},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-83.2,y:-162.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-85,y:-204},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-86.8,y:-245.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-88.6,y:-286.6},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-90.3,y:-327.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-92,y:-369.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-93.7,y:-410.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-95.1,y:-451.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-94.6,y:-455},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-93.8,y:-458.2},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-92.8,y:-461.4},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-91.2,y:-464.2},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-88.5,y:-464.5},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-87.4,y:-462.6,alpha:0.875},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-86.9,y:-460.5,alpha:0.75},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-86.6,y:-458.4,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-86.4,y:-456.2,alpha:0.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-86.2,y:-454.1,alpha:0.375},0).wait(1).to({scaleX:0.07,scaleY:0.07,y:-451.9,alpha:0.25},0).wait(1).to({scaleX:0.06,scaleY:0.06,y:-449.8,alpha:0.125},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-86.3,y:-447.6,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_72A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-99.2,y:-76.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-116.7,y:-115.7},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-130.1,y:-156.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-139.2,y:-199},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-143.9,y:-241.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-144.4,y:-285.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-140.8,y:-328.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-133.4,y:-370.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-122.2,y:-412.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-107.3,y:-453},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-105,y:-457.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-102.3,y:-461.8},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-99.3,y:-465.8},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-95.9,y:-469.6},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-92.3,y:-473.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-89.5,alpha:0.875},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-87.3,y:-472.9,alpha:0.75},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-85,y:-472.5,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-82.8,y:-471.6,alpha:0.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-80.9,y:-470.1,alpha:0.375},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-79.5,y:-468.2,alpha:0.25},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-78.5,y:-466.4,alpha:0.125},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-77.1,y:-463.9,alpha:0},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_65C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-88.7,y:-98.4,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-105.7,y:-161.3,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-131.2,y:-221.1,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-166.7,y:-275.5,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-212,y:-322.2,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-264.3,y:-360.9,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-320.9,y:-393,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-379.9,y:-420.6,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-382.6,y:-422,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-385.3,y:-423.3,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-388.1,y:-424.3,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-391.1,y:-425.2,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-394.1,y:-425.6,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-397.1,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-400,y:-424.8,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-401.7,y:-424,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-403.3,y:-423,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-404.8,y:-421.9,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-406.1,y:-420.5,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-406.7,y:-419.3,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-406.6,y:-416.8,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_65B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-110.8,y:-79.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-144,y:-120.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-177.2,y:-160.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-210,y:-201.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-242.5,y:-242.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-274.5,y:-284.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-306.2,y:-326},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-337.6,y:-368},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-368.8,y:-410.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-370.3,y:-412.6,alpha:0.941},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-371.8,y:-414.9,alpha:0.882},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-373.4,y:-417.2,alpha:0.824},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-375,y:-419.5,alpha:0.765},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-376.6,y:-421.8,alpha:0.706},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-378.2,y:-424,alpha:0.647},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-379.9,y:-426.3,alpha:0.588},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-380.5,y:-427.2,alpha:0.529},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-381.2,y:-428.1,alpha:0.471},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-382,y:-429,alpha:0.412},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-382.8,y:-429.8,alpha:0.353},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-383.6,y:-430.5,alpha:0.294},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-384.5,y:-431.3,alpha:0.235},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-385.5,y:-431.9,alpha:0.176},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-386.1,y:-432.3,alpha:0.118},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-386.8,y:-432.7,alpha:0.059},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-388.6,y:-433.5,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_65A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-135.3,y:-65.4,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-189.7,y:-97.8,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-240.5,y:-135.8,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-286.8,y:-179.1,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-327.4,y:-227.7,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-361,y:-281.5,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-385.3,y:-339.9,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-397.8,y:-402,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-397.6,y:-405.6,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-396.8,y:-409,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-395.5,y:-412.4,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-393.9,y:-415.5,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-391.8,y:-418.5,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-389.6,y:-421.3,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-387.1,y:-423.8,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-384.5,y:-426.2,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-381.6,y:-428.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-378.7,y:-430.6,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-375.7,y:-432.5,alpha:0.401},0).wait(1).to({x:-372.1,y:-433.1,alpha:0.369},0).wait(1).to({x:-368.6,y:-433.2,alpha:0.338},0).wait(1).to({x:-365,y:-432.9,alpha:0.306},0).wait(1).to({x:-361.6,y:-432.3,alpha:0.275},0).wait(1).to({x:-358,y:-431.3,alpha:0.243},0).wait(1).to({x:-354.7,y:-430,alpha:0.212},0).wait(1).to({x:-351.5,y:-428.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_64C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-81.5,y:-92.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-88.3,y:-151},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-100.8,y:-208.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-123.6,y:-262.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-159.1,y:-308.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-204.4,y:-345.6},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-255,y:-375.2},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-308.1,y:-400.1},0).wait(1).to({x:-312.3,y:-413.4,alpha:0.923},0).wait(1).to({x:-327.8,y:-427.8,alpha:0.846},0).wait(1).to({x:-342,y:-440.2,alpha:0.769},0).wait(1).to({x:-356.6,y:-452.5,alpha:0.692},0).wait(1).to({x:-370.3,y:-463.3,alpha:0.615},0).wait(1).to({x:-387.2,y:-475,alpha:0.538},0).wait(1).to({x:-403.7,y:-485.3,alpha:0.462},0).wait(1).to({x:-418.5,y:-493.5,alpha:0.385},0).wait(1).to({x:-436.9,y:-502.6,alpha:0.308},0).wait(1).to({x:-454.4,y:-510.9,alpha:0.231},0).wait(1).to({x:-471.7,y:-519.1,alpha:0.154},0).wait(1).to({x:-489.7,y:-527.6,alpha:0.077},0).wait(1).to({x:-506,y:-534.9,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_64B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-98.7,y:-72.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-119.7,y:-106.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-140.6,y:-140},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-161.6,y:-173.7},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-182.6,y:-207.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-203.6,y:-241.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-224.6,y:-274.9},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-245.5,y:-308.7},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-266.5,y:-342.4},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-287.5,y:-376.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-308.4,y:-410},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-307.9,y:-413.3,alpha:0.933},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-307.8,y:-416.6,alpha:0.867},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-308,y:-419.9,alpha:0.8},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-308.4,y:-423.2,alpha:0.733},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-309.2,y:-426.5,alpha:0.667},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-310.3,y:-429.6,alpha:0.6},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-311.8,y:-432.7,alpha:0.533},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-314.7,y:-437.9,alpha:0.467},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-318.4,y:-442.7,alpha:0.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-322.6,y:-447,alpha:0.333},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-327.4,y:-450.5,alpha:0.267},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-332.8,y:-453.3,alpha:0.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-338.6,y:-455.1,alpha:0.133},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-344.6,y:-455.7,alpha:0.067},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-350.6,y:-455.5,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_64A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-127.4,y:-70.5,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-173.6,y:-107.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-216,y:-148.1,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-254.3,y:-192.9,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-288.2,y:-241.1,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-317.5,y:-292.3,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-341,y:-346.3,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-352.7,y:-403.6,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-350.9,y:-408.5,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-349,y:-413.4,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-346.9,y:-418.2,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-344.4,y:-422.8,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-341.4,y:-427.1,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-337.7,y:-430.7,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-333.2,y:-433.3,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-328.3,y:-434.8,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-323.1,y:-435.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-317.8,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-312.6,y:-435.2,alpha:0.401},0).wait(1).to({x:-308.3,y:-434.6,alpha:0.369},0).wait(1).to({x:-304.1,y:-433.8,alpha:0.338},0).wait(1).to({x:-299.8,y:-432.8,alpha:0.306},0).wait(1).to({x:-295.7,y:-431.4,alpha:0.275},0).wait(1).to({x:-291.7,y:-429.7,alpha:0.243},0).wait(1).to({x:-288,y:-427.5,alpha:0.212},0).wait(1).to({x:-284.8,y:-424.6,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_63C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ballStand:0});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-63.2,y:-74.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-57.3,y:-112.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-60,y:-151.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-70.2,y:-188.7},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-86.2,y:-223.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-106.7,y:-256.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-130.5,y:-287.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-157.1,y:-315.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-185.8,y:-341.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-216.4,y:-365.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-248.7,y:-386.8},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-282.6,y:-405.6},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-282.3,y:-418.8},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-284.8,y:-431.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-289.8,y:-444.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-296.7,y:-455.3},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-305.7,y:-465.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-309.2,y:-467.9,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-313.2,y:-470.4,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-317.2,y:-472.2,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-321.5,y:-473.5,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-326,y:-474,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-330.5,y:-473.8,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-334.8,y:-472.7,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_63B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-94.9,y:-69.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-111.9,y:-99.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-129,y:-130.5},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-146.1,y:-161},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-163.1,y:-191.6},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-180.2,y:-222.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-197.2,y:-252.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-214.3,y:-283.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-231.4,y:-313.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-248.4,y:-344.4},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-265.5,y:-375},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-282.6,y:-405.6},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-281.1,y:-418.7},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-281,y:-431.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-282.7,y:-445},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-287,y:-457.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-295,y:-468},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-297.6,y:-470.2,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-300.4,y:-472.1,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-303.5,y:-473.8,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-306.6,y:-474.9,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-309.9,y:-475.2,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-313.1,y:-474.1,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-315.5,y:-471.6,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_63A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-119.9,y:-60.4},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-161.5,y:-83.2},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-201.8,y:-108.2},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-239.2,y:-137.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-270.3,y:-172.8},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-289.8,y:-215.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-297.1,y:-262.4},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-296.6,y:-309.9},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-292.3,y:-357},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-286.1,y:-404.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-286.5,y:-413.5,alpha:0.964},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-286.8,y:-422.9,alpha:0.928},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-287,y:-432.4,alpha:0.892},0).wait(1).to({scaleX:0.11,scaleY:0.11,y:-441.8,alpha:0.855},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-286.9,y:-451.3,alpha:0.819},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-286.6,y:-460.7,alpha:0.783},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-286.1,y:-470.2,alpha:0.747},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-285.3,y:-479.6,alpha:0.711},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-284.3,y:-489,alpha:0.675},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-282.9,y:-498.3,alpha:0.638},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-280.9,y:-507.6,alpha:0.602},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-278.1,y:-516.6,alpha:0.566},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-273.7,y:-524.9,alpha:0.53},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-266.2,y:-530.5,alpha:0.494},0).wait(1).to({x:-259.4,alpha:0.458},0).wait(1).to({x:-253.2,y:-527.6,alpha:0.422},0).wait(1).to({x:-248.1,y:-523,alpha:0.385},0).wait(1).to({x:-243.9,y:-517.5,alpha:0.349},0).wait(1).to({x:-240.4,y:-511.6,alpha:0.313},0).wait(1).to({x:-237.3,y:-505.4,alpha:0.277},0).wait(1).to({x:-234.6,y:-499.1,alpha:0.241},0).wait(1).to({x:-232.3,y:-492.6,alpha:0.205},0).wait(1).to({x:-230.2,y:-486.1,alpha:0.168},0).wait(1).to({x:-228.4,y:-479.4,alpha:0.132},0).wait(1).to({x:-226.9,y:-472.7,alpha:0.096},0).wait(1).to({x:-226,y:-465.9,alpha:0.06},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_62C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-72.3,y:-74.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-68.5,y:-109.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-67.6,y:-145.8},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-70.9,y:-181.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-79.1,y:-216.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-92.4,y:-249.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-110.2,y:-280.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-131.7,y:-309.6},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-155.9,y:-336.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-182.2,y:-360.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-210.1,y:-383.1},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-239.2,y:-404.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-238.4,y:-416.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-239.9,y:-429},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-243.7,y:-440.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-249.8,y:-451.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-258.1,y:-460.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-262.6,y:-463.9,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-267.8,y:-465.8,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-273.2,y:-466.2,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-278.6,y:-465.3,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-283.8,y:-463.5,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-288.7,y:-461,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-293.2,y:-457.9,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_62B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-91.1,y:-69.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-104.4,y:-99.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-117.6,y:-130.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-130.9,y:-161},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-144.2,y:-191.5},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-157.5,y:-222.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-170.8,y:-252.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-184,y:-283.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-197.3,y:-313.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-210.6,y:-344.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-223.9,y:-374.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-237.2,y:-405.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-235.7,y:-418.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-235.6,y:-431.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-237.3,y:-444.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-241.6,y:-457.4},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-249.6,y:-467.9},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-252.2,y:-470.1,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-255,y:-472,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-258.1,y:-473.7,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-261.2,y:-474.8,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-264.5,y:-475.1,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-267.7,y:-474,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-270.1,y:-471.5,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_62A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-115.4,y:-47.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-151.3,y:-61.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-184.1,y:-82.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-212,y:-109},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-233.5,y:-141},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-248.4,y:-176.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-257,y:-214.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-260.4,y:-252.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-259.6,y:-291.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-255.2,y:-329.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-247.7,y:-367.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-237.3,y:-405.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-234.1,y:-417.4},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-232.1,y:-430},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-230.2,y:-442.5},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-226,y:-454.4},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-217.8,y:-464.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-214,y:-466.7,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-209.6,y:-468.5,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-205.1,y:-469.1,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-200.6,y:-468.3,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-196.4,y:-466.3,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-192.7,y:-463.6,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-189.6,y:-460.2,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_61C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-71.3,y:-73.4},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-64.5,y:-107.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-58.9,y:-142.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-56.1,y:-177.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-57.8,y:-213},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-65,y:-247.5},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-77.9,y:-280.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-96,y:-310.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-118,y:-337.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-142.8,y:-362.8},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-169.8,y:-385.6},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-198.2,y:-406.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-197.4,y:-418.9},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-198.9,y:-431.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-202.7,y:-443},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-208.8,y:-453.8},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-217.1,y:-463},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-221.6,y:-466.1,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-226.8,y:-468,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-232.2,y:-468.4,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-237.6,y:-467.6,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-242.8,y:-465.8,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-247.7,y:-463.2,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-252.2,y:-460.1,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_61B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-87.3,y:-69.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-96.9,y:-99.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-106.4,y:-130.2},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-116,y:-160.7},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-125.5,y:-191.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-135.1,y:-221.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-144.6,y:-252.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-154.1,y:-282.6},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-163.7,y:-313.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-173.2,y:-343.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-182.8,y:-374},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-192.3,y:-404.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-190.9,y:-417.7},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-190.7,y:-430.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-192.4,y:-444},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-196.7,y:-456.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-204.7,y:-467},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-207.3,y:-469.1,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-210.1,y:-471.1,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-213.2,y:-472.8,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-216.4,y:-473.9,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-219.7,y:-474.1,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-222.9,y:-473,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-225.2,y:-470.6,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_61A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-109.3,y:-55.8},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-138.3,y:-76.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-164.1,y:-101.6},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-185.5,y:-130.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-202,y:-162},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-213.3,y:-195.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-219.8,y:-231.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-221.9,y:-266.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-220.4,y:-302.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-215.6,y:-338.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-208.1,y:-373.2},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-198.2,y:-407.6},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-195,y:-419.9},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-193,y:-432.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-191.1,y:-445},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-186.9,y:-456.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-178.7,y:-466.6},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-174.9,y:-469.2,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-170.5,y:-471,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-166,y:-471.6,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-161.5,y:-470.8,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-157.3,y:-468.8,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-153.6,y:-466.1,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-150.5,y:-462.7,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_60C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-64.7,y:-69.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-54.2,y:-101.6},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-46.8,y:-134.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-43.2,y:-167.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-43.7,y:-201.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-48.4,y:-234.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-57.3,y:-267.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-69.8,y:-298.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-85.6,y:-327.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-104.1,y:-356},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-124.7,y:-382.5},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-147.2,y:-407.6},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-146.4,y:-420},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-147.9,y:-432.3},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-151.7,y:-444.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-157.8,y:-454.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-166.1,y:-464.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-170.6,y:-467.2,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-175.8,y:-469.1,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-181.2,y:-469.5,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-186.6,y:-468.7,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-191.8,y:-466.9,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-196.7,y:-464.3,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-201.2,y:-461.2,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_60B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-83.9,y:-69.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-89.9,y:-99.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-96,y:-129.9},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-102,y:-160.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-108.1,y:-190.6},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-114.2,y:-221},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-120.2,y:-251.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-126.3,y:-281.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-132.3,y:-312.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-138.4,y:-342.4},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-144.4,y:-372.8},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-150.5,y:-403.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-149.6,y:-414.4},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-150.1,y:-425.8},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-151.2,y:-437},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-152,y:-448.3},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-151.6,y:-459.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-151.3,y:-462.2,alpha:0.86},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-150.9,y:-464.7,alpha:0.72},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-150.3,y:-467.5,alpha:0.58},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-149.6,y:-469.7,alpha:0.44},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-148.1,y:-471.9,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-146,y:-471.4,alpha:0.16},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-144.6,y:-469.2,alpha:0.02},0).wait(4)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_60A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-107.4,y:-60.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-135.6,y:-83.8},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-161.7,y:-109.6},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-184.9,y:-138},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-203.7,y:-169.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-216.4,y:-203.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-221.1,y:-240},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-217.2,y:-276.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-206.1,y:-311.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-189.8,y:-344.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-170.2,y:-375.1},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-149.4,y:-405.4},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-145.8,y:-412.7},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-143.6,y:-420.7},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-142.2,y:-428.8},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-141.3,y:-437},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-140.7,y:-445.2},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-140.2,y:-453.4},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-139.7,y:-461.6},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-139.1,y:-469.9},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-138.4,y:-478.1},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-137.2,y:-486.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-135.2,y:-494.2},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-131.6,y:-501.6},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-125,y:-506.2},0).wait(1).to({x:-122.9,y:-506.5,alpha:0.891},0).wait(1).to({x:-120.8,alpha:0.782},0).wait(1).to({x:-118.7,y:-506.2,alpha:0.673},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-116.7,y:-505.7,alpha:0.564},0).wait(1).to({x:-114.8,y:-504.8,alpha:0.456},0).wait(1).to({x:-113,y:-503.8,alpha:0.347},0).wait(1).to({x:-111.3,y:-502.5,alpha:0.238},0).wait(1).to({x:-109.8,y:-501.1,alpha:0.129},0).wait(1).to({x:-108.4,y:-499.6,alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_59C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-60.3,y:-73.6},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-45.2,y:-109.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-33.3,y:-146.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-25.6,y:-185.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-23.4,y:-224},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-27.7,y:-262.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-39,y:-300.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-56.5,y:-334.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-78.5,y:-367.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-102.8,y:-397.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-103.8,y:-413.4},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-105.1,y:-428.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-106.2,y:-444.4},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-107.1,y:-460},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-107.7,y:-475.6},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-107.8,y:-479.1,alpha:0.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-108.1,y:-482.6,alpha:0.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-108.7,y:-486.3,alpha:0.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-109.5,y:-489.6,alpha:0.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-110.7,y:-492.9,alpha:0.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-112.4,y:-495.9,alpha:0.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-115.1,y:-498.1,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-118.4,y:-498.2,alpha:0.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-120.9,y:-496.5,alpha:0.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-123.5,y:-493.3,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_59B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-79.6,y:-74.6},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-81.5,y:-110.6},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-83.6,y:-146.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-85.8,y:-182.5},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-88.1,y:-218.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-90.7,y:-254.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-93.4,y:-290.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-96.3,y:-326.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-99.4,y:-361.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-102.8,y:-397.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-104.6,y:-413.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-106.2,y:-428.6},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-107.3,y:-444.1},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-107.7,y:-459.6},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-107.3,y:-475.2},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-107.1,y:-478.8,alpha:0.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-106.8,y:-482.5,alpha:0.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-106.5,y:-486.2,alpha:0.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-106.2,y:-489.9,alpha:0.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-105.8,y:-493.6,alpha:0.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-105.3,y:-497.4,alpha:0.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-104.4,y:-500.8,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-102,y:-501.7,alpha:0.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-100.2,y:-498.6,alpha:0.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-98.5,y:-495.1,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_59A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-98.7,y:-71},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-117.2,y:-104.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-132.5,y:-140},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-143.8,y:-176.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-150.2,y:-214.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-150.9,y:-253.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-145.8,y:-291.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-135.3,y:-328.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-120.5,y:-363.7},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-102.8,y:-397.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-101.7,y:-413.2},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-103.8,y:-428.6},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-106,y:-444},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-107.3,y:-459.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:-475.2},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-107.1,y:-478.8,alpha:0.9},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-106.8,y:-482.5,alpha:0.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-106.5,y:-486.2,alpha:0.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-106.2,y:-489.9,alpha:0.6},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-105.8,y:-493.6,alpha:0.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-105.3,y:-497.4,alpha:0.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-104.4,y:-500.8,alpha:0.3},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-102,y:-501.7,alpha:0.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-100.2,y:-498.6,alpha:0.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-98.5,y:-495.1,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_53C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-135.3,y:-65.4,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-189.7,y:-97.8,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-240.5,y:-135.8,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-286.8,y:-179.1,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-327.4,y:-227.7,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-361,y:-281.5,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-385.3,y:-339.9,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-397.8,y:-402,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-397.6,y:-405.6,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-396.8,y:-409,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-395.5,y:-412.4,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-393.9,y:-415.5,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-391.8,y:-418.5,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-389.6,y:-421.3,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-387.1,y:-423.8,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-384.5,y:-426.2,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-381.6,y:-428.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-378.7,y:-430.6,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-375.7,y:-432.5,alpha:0.401},0).wait(1).to({x:-372.1,y:-433.1,alpha:0.369},0).wait(1).to({x:-368.6,y:-433.2,alpha:0.338},0).wait(1).to({x:-365,y:-432.9,alpha:0.306},0).wait(1).to({x:-361.6,y:-432.3,alpha:0.275},0).wait(1).to({x:-358,y:-431.3,alpha:0.243},0).wait(1).to({x:-354.7,y:-430,alpha:0.212},0).wait(1).to({x:-351.5,y:-428.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_53B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-110.8,y:-79.5},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-144,y:-120.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-177.2,y:-160.7},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-210,y:-201.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-242.5,y:-242.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-274.5,y:-284.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-306.2,y:-326},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-337.6,y:-368},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-368.8,y:-410.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-370.3,y:-412.6,alpha:0.941},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-371.8,y:-414.9,alpha:0.882},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-373.4,y:-417.2,alpha:0.824},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-375,y:-419.5,alpha:0.765},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-376.6,y:-421.8,alpha:0.706},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-378.2,y:-424,alpha:0.647},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-379.9,y:-426.3,alpha:0.588},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-380.5,y:-427.2,alpha:0.529},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-381.2,y:-428.1,alpha:0.471},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-382,y:-429,alpha:0.412},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-382.8,y:-429.8,alpha:0.353},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-383.6,y:-430.5,alpha:0.294},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-384.5,y:-431.3,alpha:0.235},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-385.5,y:-431.9,alpha:0.176},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-386.1,y:-432.3,alpha:0.118},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-386.8,y:-432.7,alpha:0.059},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-388.6,y:-433.5,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_53A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-88.7,y:-98.4,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-105.7,y:-161.3,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-131.2,y:-221.1,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-166.7,y:-275.5,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-212,y:-322.2,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-264.3,y:-360.9,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-320.9,y:-393,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-379.9,y:-420.6,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-382.6,y:-422,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-385.3,y:-423.3,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-388.1,y:-424.3,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-391.1,y:-425.2,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-394.1,y:-425.6,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-397.1,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-400,y:-424.8,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-401.7,y:-424,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-403.3,y:-423,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-404.8,y:-421.9,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-406.1,y:-420.5,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-406.7,y:-419.3,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-406.6,y:-416.8,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_52C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-77.8,y:-95.8,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-94.8,y:-155.1,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-126,y:-208.2,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-167.2,y:-254.2,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-214.8,y:-293.5,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-266.8,y:-326.9,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-321.6,y:-355.2,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-378.8,y:-378.8,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-381.4,y:-380.2,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-384.2,y:-381.5,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-387,y:-382.5,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-389.9,y:-383.4,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-392.9,y:-383.8,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-395.9,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-398.9,y:-383,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-400.6,y:-382.2,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-402.2,y:-381.2,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-403.7,y:-380.1,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-404.9,y:-378.7,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-405.5,y:-377.5,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-405.4,y:-375,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_52B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{"ballStand":0});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-111.1,y:-75.7},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-144.3,y:-112.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-177.1,y:-150.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-209.5,y:-187.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-241.6,y:-225.8},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-273.5,y:-263.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-305.3,y:-302.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-337,y:-340.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-368.8,y:-378.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-370.5,y:-381.1,alpha:0.941},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-372.4,y:-383.5,alpha:0.882},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-374.2,y:-385.7,alpha:0.824},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-376.2,y:-388,alpha:0.765},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-378.2,y:-390.1,alpha:0.706},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-380.3,y:-392.1,alpha:0.647},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-382.6,y:-394,alpha:0.588},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-383.8,y:-394.7,alpha:0.529},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-385,y:-395.4,alpha:0.471},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-386.3,y:-396,alpha:0.412},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-387.7,y:-396.4,alpha:0.353},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-389.1,y:-396.6,alpha:0.294},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-390.5,y:-396.5,alpha:0.235},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-391.8,y:-396.4,alpha:0.176},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-392.9,y:-396.2,alpha:0.118},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-393.8,y:-396.1,alpha:0.059},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-396.1,y:-396,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_52A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-132,y:-63.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-183.9,y:-92.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-232.6,y:-126.2,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-277,y:-165.7,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-315.5,y:-211,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-346.4,y:-261.7,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-368,y:-317.1,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-378.8,y:-375.5,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-378.6,y:-379,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-377.8,y:-382.5,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-376.5,y:-385.8,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-374.9,y:-389,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-372.8,y:-392,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-370.6,y:-394.7,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-368.1,y:-397.3,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-365.5,y:-399.6,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-362.6,y:-402,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-359.7,y:-404,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-356.7,y:-406,alpha:0.401},0).wait(1).to({x:-353.1,y:-406.5,alpha:0.369},0).wait(1).to({x:-349.6,y:-406.6,alpha:0.338},0).wait(1).to({x:-346,y:-406.4,alpha:0.306},0).wait(1).to({x:-342.6,y:-405.7,alpha:0.275},0).wait(1).to({x:-339,y:-404.7,alpha:0.243},0).wait(1).to({x:-335.7,y:-403.4,alpha:0.212},0).wait(1).to({x:-332.5,y:-401.8,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_51C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-75,y:-85.7,alpha:0.971},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-84,y:-133.8,alpha:0.942},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-100.6,y:-179.8,alpha:0.914},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-124,y:-222.7,alpha:0.885},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-154.1,y:-260.6,alpha:0.856},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-188.7,y:-295,alpha:0.827},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-225.8,y:-326.8,alpha:0.798},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-265.9,y:-355.5,alpha:0.769},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-308.3,y:-375.4,alpha:0.741},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-324.1,y:-359,alpha:0.712},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-338.3,y:-341.1,alpha:0.683},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-350.9,y:-322.1,alpha:0.654},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-361.4,y:-301.9,alpha:0.625},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-369.7,y:-280.6,alpha:0.596},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-375.2,y:-258.5,alpha:0.568},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-377.7,y:-235.8,alpha:0.539},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-380,y:-246.2,alpha:0.51},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-382.6,y:-256.5,alpha:0.481},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-385.6,y:-266.8,alpha:0.452},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-389.4,y:-276.7,alpha:0.424},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-396.5,y:-280.1,alpha:0.395},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-402,y:-263.5,alpha:0.366},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-405.3,y:-246.3,alpha:0.337},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-407.5,y:-229,alpha:0.308},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-409,y:-211.6,alpha:0.279},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-410,y:-194.1,alpha:0.251},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-410.6,y:-176.6,alpha:0.222},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-411,y:-159.1,alpha:0.193},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-141.7,alpha:0.164},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-410.9,y:-124.1,alpha:0.135},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-427.9,y:-101,alpha:0.106},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-432.8,y:-69.3,alpha:0.078},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-435.1,y:-37.4,alpha:0.049},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-436,y:-5.1,alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_51B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-127.9,y:-53,alpha:0.971},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-176.3,y:-72.2,alpha:0.942},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-221.6,y:-97.7,alpha:0.914},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-261.5,y:-131,alpha:0.885},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-292.6,y:-172.6,alpha:0.856},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-312.2,y:-220.7,alpha:0.827},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-319.9,y:-272.2,alpha:0.798},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-317.7,y:-324.1,alpha:0.769},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-308.3,y:-375.4,alpha:0.741},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-318.9,y:-358.1,alpha:0.712},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-327.9,y:-339.9,alpha:0.683},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-335.4,y:-321,alpha:0.654},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-341.4,y:-301.7,alpha:0.625},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-345.9,y:-281.9,alpha:0.596},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-348.9,y:-261.8,alpha:0.568},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-350.4,y:-241.6,alpha:0.539},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-352.7,y:-251.9,alpha:0.51},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-355.4,y:-262.3,alpha:0.481},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-358.4,y:-272.5,alpha:0.452},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-362.2,y:-282.5,alpha:0.424},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-369.3,y:-285.9,alpha:0.395},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-374.8,y:-269.3,alpha:0.366},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-378,y:-252.1,alpha:0.337},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-380.2,y:-234.7,alpha:0.308},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-381.7,y:-217.3,alpha:0.279},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-382.8,y:-199.8,alpha:0.251},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-383.4,y:-182.4,alpha:0.222},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-383.7,y:-164.9,alpha:0.193},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-383.8,y:-147.4,alpha:0.164},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-383.7,y:-129.9,alpha:0.135},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-402.9,y:-127.4,alpha:0.106},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-407.1,y:-88.8,alpha:0.078},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-408.5,y:-50,alpha:0.049},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-408.7,y:-10.9,alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_51A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-111.1,y:-59.3,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-142.9,y:-82.3,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-172.9,y:-107.5,alpha:0.882},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-200.8,y:-135,alpha:0.843},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-226.4,y:-164.7,alpha:0.804},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-249.5,y:-196.3,alpha:0.765},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-269.7,y:-229.9,alpha:0.726},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-286.8,y:-265.1,alpha:0.686},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-300.5,y:-301.8,alpha:0.647},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-309.9,y:-339.9,alpha:0.608},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-311.2,y:-378.8,alpha:0.569},0).wait(1).to({x:-328.3,y:-379.3,alpha:0.53},0).wait(1).to({x:-345.4,y:-378.1,alpha:0.49},0).wait(1).to({x:-362.4,y:-376,alpha:0.451},0).wait(1).to({x:-379.3,y:-373,alpha:0.412},0).wait(1).to({x:-396.1,y:-369.5,alpha:0.373},0).wait(1).to({x:-412.7,y:-365.3,alpha:0.334},0).wait(1).to({x:-429.2,y:-360.5,alpha:0.294},0).wait(1).to({x:-445.4,y:-355,alpha:0.255},0).wait(1).to({x:-461.4,y:-348.9,alpha:0.216},0).wait(1).to({x:-477,y:-341.8,alpha:0.177},0).wait(1).to({x:-492.1,y:-333.6,alpha:0.138},0).wait(1).to({x:-506.2,y:-323.9,alpha:0.098},0).wait(1).to({x:-518.5,y:-311.9,alpha:0.059},0).wait(1).to({x:-526.2,y:-296.8,alpha:0.02},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_50C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-85.4,y:-75.7,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-94.8,y:-112.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-106.1,y:-148.2,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-119.6,y:-183.4,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-135.4,y:-217.7,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-153.6,y:-250.7,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-174.4,y:-282.2,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-198,y:-311.6,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-224.5,y:-338.4,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-254.1,y:-361.8,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-287.3,y:-379.6,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-283.3,y:-377.8,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-279.4,y:-375.9,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-275.6,y:-373.8,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-271.9,y:-371.5,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-268.3,y:-369.1,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-264.8,y:-366.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-261.4,y:-363.8,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-258.1,y:-360.9,alpha:0.401},0).wait(1).to({x:-251.3,y:-352.5,alpha:0.369},0).wait(1).to({x:-245.7,y:-343.3,alpha:0.338},0).wait(1).to({x:-240.8,y:-333.6,alpha:0.306},0).wait(1).to({x:-236.6,y:-323.8,alpha:0.275},0).wait(1).to({x:-232.9,y:-313.6,alpha:0.243},0).wait(1).to({x:-230,y:-303.2,alpha:0.212},0).wait(1).to({x:-228.5,y:-292.6,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_50B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-97.3,y:-69.5,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-116.7,y:-100.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-136.2,y:-130.9,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-155.6,y:-161.7,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-175,y:-192.4,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-194.4,y:-223.3,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-213.7,y:-254.1,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-232.8,y:-285.1,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-251.7,y:-316.1,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-270.2,y:-347.5,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-287.3,y:-379.6,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-283.3,y:-377.8,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-279.4,y:-375.9,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-275.6,y:-373.8,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-271.9,y:-371.5,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-268.3,y:-369.1,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-264.8,y:-366.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-261.4,y:-363.8,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-258.1,y:-360.9,alpha:0.401},0).wait(1).to({x:-251.3,y:-352.5,alpha:0.369},0).wait(1).to({x:-245.7,y:-343.3,alpha:0.338},0).wait(1).to({x:-240.8,y:-333.6,alpha:0.306},0).wait(1).to({x:-236.6,y:-323.8,alpha:0.275},0).wait(1).to({x:-232.9,y:-313.6,alpha:0.243},0).wait(1).to({x:-230,y:-303.2,alpha:0.212},0).wait(1).to({x:-228.5,y:-292.6,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_50A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-113.9,y:-56.9,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-148.5,y:-77.7,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-181.3,y:-101.5,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-211.6,y:-128.2,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-239,y:-157.9,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-262.8,y:-190.6,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-282.4,y:-225.9,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-296.8,y:-263.7,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-304.8,y:-303.3,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-304,y:-343.6,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-287.3,y:-379.7,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-282.6,y:-378.6,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-277.9,y:-377.2,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-273.3,y:-375.6,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-268.9,y:-373.7,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-264.5,y:-371.6,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-260.3,y:-369.2,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-256.3,y:-366.4,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-252.6,y:-363.3,alpha:0.401},0).wait(1).to({x:-245.5,y:-354.6,alpha:0.369},0).wait(1).to({x:-239.6,y:-345.1,alpha:0.338},0).wait(1).to({x:-234.3,y:-335.1,alpha:0.306},0).wait(1).to({x:-229.7,y:-324.9,alpha:0.275},0).wait(1).to({x:-225.5,y:-314.4,alpha:0.243},0).wait(1).to({x:-222.2,y:-303.6,alpha:0.212},0).wait(1).to({x:-220.5,y:-292.6,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_49C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-81.2,y:-73.4,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-87.5,y:-108,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-95.8,y:-142.1,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-105.7,y:-175.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-117.5,y:-209.1,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-131.6,y:-241.4,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-149.3,y:-272.2,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-170.8,y:-299.7,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-193.3,y:-327.4,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-217.3,y:-356.4,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-238.1,y:-379.9,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-237.7,y:-375.6,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-237.3,y:-371.3,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-236.9,y:-367.1,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-236.4,y:-362.8,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-235.9,y:-358.6,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-235.3,y:-354.4,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-234.7,y:-350.1,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-234.1,y:-345.9,alpha:0.401},0).wait(1).to({x:-232.8,y:-339.6,alpha:0.369},0).wait(1).to({x:-231.2,y:-333.3,alpha:0.338},0).wait(1).to({x:-229.1,y:-327.3,alpha:0.306},0).wait(1).to({x:-226.7,y:-321.3,alpha:0.275},0).wait(1).to({x:-224.1,y:-315.5,alpha:0.243},0).wait(1).to({x:-221.5,y:-309.6,alpha:0.212},0).wait(1).to({x:-219.1,y:-303.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_49B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-94.8,y:-68.6,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-111.6,y:-98.6,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-128,y:-128.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-144.2,y:-159.1,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-159.9,y:-189.6,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-175.3,y:-220.4,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-190.1,y:-251.4,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-204.2,y:-282.7,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-217.4,y:-314.4,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-229.3,y:-346.7,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-238.1,y:-379.9,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-236.3,y:-376.3,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-234.5,y:-372.8,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-232.7,y:-369.3,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-230.8,y:-365.8,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-228.8,y:-362.4,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-226.8,y:-359,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-224.7,y:-355.6,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-222.5,y:-352.2,alpha:0.401},0).wait(1).to({x:-218.8,y:-345.9,alpha:0.369},0).wait(1).to({x:-215.6,y:-339.3,alpha:0.338},0).wait(1).to({x:-213,y:-332.5,alpha:0.306},0).wait(1).to({x:-211,y:-325.4,alpha:0.275},0).wait(1).to({x:-209.7,y:-318.2,alpha:0.243},0).wait(1).to({x:-208.9,y:-311,alpha:0.212},0).wait(1).to({x:-208.6,y:-303.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_49A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-111.3,y:-57.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-142.9,y:-78.4,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-172.2,y:-102.9,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-198.3,y:-130.8,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-220.6,y:-161.8,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-238.2,y:-195.6,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-250.7,y:-231.7,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-257.6,y:-269.2,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-258.6,y:-307.3,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-253.1,y:-345.1,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-238.1,y:-379.9,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-235.5,y:-377.8,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-232.9,y:-375.6,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-230.4,y:-373.4,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-227.9,y:-371.2,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-225.5,y:-369,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-223,y:-366.8,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-220.6,y:-364.5,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-218.1,y:-362.2,alpha:0.401},0).wait(1).to({x:-212.3,y:-354.1,alpha:0.369},0).wait(1).to({x:-208.4,y:-344.9,alpha:0.338},0).wait(1).to({x:-205.6,y:-335.3,alpha:0.306},0).wait(1).to({x:-203.5,y:-325.5,alpha:0.275},0).wait(1).to({x:-202,y:-315.6,alpha:0.243},0).wait(1).to({x:-201,y:-305.7,alpha:0.212},0).wait(1).to({x:-200.6,y:-295.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_48C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{"ballStand":0});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-79.2,y:-73.3,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-81.5,y:-108.7,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-84.7,y:-144.2,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-89,y:-179.4,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-94.6,y:-214.5,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-102,y:-249.3,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-112.3,y:-283.5,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-127.4,y:-314.8,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-147.7,y:-343.8,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-172.4,y:-370.2,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-201.1,y:-386.2,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-203,y:-382.4,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-202.9,y:-378,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-202.1,y:-373.7,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-201,y:-369.4,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-199.9,y:-365.1,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-198.8,y:-360.8,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-197.8,y:-356.5,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-197.1,y:-352.2,alpha:0.401},0).wait(1).to({x:-195.9,y:-345.7,alpha:0.369},0).wait(1).to({x:-194.6,y:-339.2,alpha:0.338},0).wait(1).to({x:-193.1,y:-332.7,alpha:0.306},0).wait(1).to({x:-191.6,y:-326.3,alpha:0.275},0).wait(1).to({x:-190.3,y:-319.8,alpha:0.243},0).wait(1).to({x:-189.1,y:-313.3,alpha:0.212},0).wait(1).to({x:-188.2,y:-306.8,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_48B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{"ballStand":0});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-89.1,y:-69.8,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-100.6,y:-100.9,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-112.1,y:-132,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-123.6,y:-163.1,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-135.1,y:-194.1,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-146.7,y:-225.2,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-158.2,y:-256.2,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-169.6,y:-287.3,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-180.7,y:-318.6,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-191.1,y:-350,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-199.3,y:-382.1,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-198.8,y:-378.3,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-198.3,y:-374.4,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-197.8,y:-370.5,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-197.4,y:-366.6,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-197,y:-362.8,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-196.6,y:-358.9,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-196.3,y:-355,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-196,y:-351.1,alpha:0.401},0).wait(1).to({x:-195.2,y:-343.4,alpha:0.369},0).wait(1).to({x:-194.4,y:-335.8,alpha:0.338},0).wait(1).to({x:-193.4,y:-328.1,alpha:0.306},0).wait(1).to({x:-192.3,y:-320.5,alpha:0.275},0).wait(1).to({x:-191.1,y:-312.9,alpha:0.243},0).wait(1).to({x:-189.9,y:-305.3,alpha:0.212},0).wait(1).to({x:-188.7,y:-297.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_48A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-106,y:-61.5,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-132.4,y:-86.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-156.8,y:-113.1,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-178.5,y:-142.1,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-196.8,y:-173.4,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-211.1,y:-206.7,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-220.5,y:-241.7,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-224.4,y:-277.7,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-222.4,y:-313.8,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-213.8,y:-349,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-197.1,y:-381,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-194.3,y:-378.7,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-191.9,y:-376,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-189.7,y:-373.1,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-187.8,y:-370.1,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-186.2,y:-366.9,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-184.8,y:-363.6,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-183.6,y:-360.2,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-182.7,y:-356.6,alpha:0.401},0).wait(1).to({x:-180.6,y:-347.4,alpha:0.369},0).wait(1).to({x:-179,y:-338.1,alpha:0.338},0).wait(1).to({x:-177.6,y:-328.8,alpha:0.306},0).wait(1).to({x:-176.5,y:-319.5,alpha:0.275},0).wait(1).to({x:-175.6,y:-310.1,alpha:0.243},0).wait(1).to({x:-175.1,y:-300.7,alpha:0.212},0).wait(1).to({x:-174.9,y:-291.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_47C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-63,y:-70.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-54,y:-104.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-49,y:-139.1,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-47.1,y:-174.5,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-48.1,y:-209.9,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-52.2,y:-245,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-60.3,y:-279.5,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-74.4,y:-311.1,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-93.9,y:-340.5,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-117.2,y:-367.6,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-145.2,y:-385.3,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-147.3,y:-381.6,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-147.8,y:-377.3,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-147.5,y:-372.9,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-147,y:-368.5,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-146.5,y:-364.2,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-146,y:-359.8,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-145.7,y:-355.5,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-145.6,y:-351.1,alpha:0.401},0).wait(1).to({x:-145.5,y:-344.5,alpha:0.369},0).wait(1).to({x:-145.3,y:-337.8,alpha:0.338},0).wait(1).to({x:-145,y:-331.2,alpha:0.306},0).wait(1).to({x:-144.6,y:-324.6,alpha:0.275},0).wait(1).to({x:-144.4,y:-318,alpha:0.243},0).wait(1).to({x:-144.1,y:-311.3,alpha:0.212},0).wait(1).to({x:-144,y:-304.7,alpha:0.18},0).wait(1).to({x:-145},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_47B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-84.3,y:-70.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-90.9,y:-101.6,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-97.5,y:-133,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-104.1,y:-164.4,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-110.8,y:-195.8,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-117.4,y:-227.2,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-124.1,y:-258.6,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-130.7,y:-290,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-137.3,y:-321.4,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-143.7,y:-352.9,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-149.4,y:-384.5,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-148.9,y:-380.6,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-148.4,y:-376.7,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-147.9,y:-372.9,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-147.5,y:-369,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-147.1,y:-365.1,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-146.7,y:-361.2,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-146.4,y:-357.3,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-146.1,y:-353.4,alpha:0.401},0).wait(1).to({x:-145.5,y:-345.9,alpha:0.369},0).wait(1).to({x:-145,y:-338.4,alpha:0.338},0).wait(1).to({x:-144.7,y:-330.9,alpha:0.306},0).wait(1).to({x:-144.4,y:-323.4,alpha:0.275},0).wait(1).to({x:-144.2,y:-315.9,alpha:0.243},0).wait(1).to({x:-143.9,y:-308.4,alpha:0.212},0).wait(1).to({x:-143.6,y:-300.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_47A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-105.6,y:-61.5,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-131.3,y:-86.6,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-154.1,y:-114.3,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-173.3,y:-144.7,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-187.6,y:-177.6,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-196.1,y:-212.5,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-198.3,y:-248.3,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-194.1,y:-283.9,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-184.2,y:-318.4,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-169.2,y:-351,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-149.4,y:-381,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-146.7,y:-378.7,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-144.2,y:-376,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-142.1,y:-373.1,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-140.2,y:-370.1,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-138.5,y:-366.9,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-137.1,y:-363.6,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-136,y:-360.2,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-135,y:-356.6,alpha:0.401},0).wait(1).to({x:-133.5,y:-349.3,alpha:0.369},0).wait(1).to({x:-132.4,y:-341.8,alpha:0.338},0).wait(1).to({x:-131.8,y:-334.4,alpha:0.306},0).wait(1).to({x:-131.7,y:-326.9,alpha:0.275},0).wait(1).to({x:-131.9,y:-319.4,alpha:0.243},0).wait(1).to({x:-132.3,y:-311.9,alpha:0.212},0).wait(1).to({x:-132.5,y:-304.4,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_46C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-88.6,y:-72},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-99.1,y:-105.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-109.3,y:-138.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-118.8,y:-172.5},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-127.2,y:-206.4},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-133.6,y:-240.8},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-136.3,y:-275.6},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-132.6,y:-310.3},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-120.7,y:-343.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-102.9,y:-373.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-85.6,y:-378.5},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-67,y:-376.4},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-49,y:-371.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-31.9,y:-363.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-16.5,y:-353.3},0).wait(1).to({x:-10,y:-347.2,alpha:0.9},0).wait(1).to({x:-4,y:-340.5,alpha:0.8},0).wait(1).to({x:1.4,y:-333.6,alpha:0.7},0).wait(1).to({x:6.5,y:-326.3,alpha:0.6},0).wait(1).to({x:11.2,y:-318.7,alpha:0.5},0).wait(1).to({x:15.4,y:-310.8,alpha:0.4},0).wait(1).to({x:19,y:-302.7,alpha:0.3},0).wait(1).to({x:21.9,y:-294.2,alpha:0.2},0).wait(1).to({x:23.5,y:-285.5,alpha:0.1},0).wait(1).to({x:22.2,y:-276.8,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_46B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-79.6,y:-72.1},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-81.5,y:-105.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-83.3,y:-138.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-85.2,y:-172.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-87,y:-205.4},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-88.9,y:-238.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-90.7,y:-272.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-92.6,y:-305.4},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-94.4,y:-338.8},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-96.3,y:-372.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-96.2,y:-362.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,y:-352.2},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-96.1,y:-342.3},0).wait(1).to({scaleX:0.11,scaleY:0.11,y:-332.3},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-96,y:-322.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:-312.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:-302.5},0).wait(1).to({x:-96.1,y:-297.5,alpha:0.875},0).wait(1).to({x:-96.3,y:-292.6,alpha:0.75},0).wait(1).to({x:-96.5,y:-287.7,alpha:0.625},0).wait(1).to({x:-96.7,y:-282.8,alpha:0.5},0).wait(1).to({x:-96.9,y:-277.9,alpha:0.375},0).wait(1).to({x:-97.1,y:-272.9,alpha:0.25},0).wait(1).to({x:-97.3,y:-268,alpha:0.125},0).wait(1).to({x:-97.5,y:-263.1,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_46A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-60.8,y:-72.2},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-45.7,y:-106.6},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-33.1,y:-142},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-24,y:-178.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-19.7,y:-215.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-21.9,y:-253.2},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-32.1,y:-289.3},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-50.3,y:-322.1},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-74.7,y:-350.6},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-102.9,y:-375.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-114.4,y:-379.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-126.5,y:-376.7},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-138,y:-372.3},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-149.3,y:-367.3},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-160.5,y:-362.2},0).wait(1).to({x:-169.3,y:-356.5,alpha:0.9},0).wait(1).to({x:-176.8,y:-349.2,alpha:0.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-183.5,y:-341.2,alpha:0.7},0).wait(1).to({x:-189.6,y:-332.7,alpha:0.6},0).wait(1).to({x:-195.3,y:-323.9,alpha:0.5},0).wait(1).to({x:-200.6,y:-314.9,alpha:0.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-205.7,y:-305.7,alpha:0.3},0).wait(1).to({x:-210.6,y:-296.4,alpha:0.2},0).wait(1).to({x:-215.4,y:-287.1,alpha:0.1},0).wait(1).to({x:-220.4,y:-277.9,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_39C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-81.4,y:-90.9,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-100.4,y:-144.4,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-131.3,y:-192.2,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-170.2,y:-233.7,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-214.5,y:-269.3,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-262.8,y:-299.5,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-314.1,y:-324,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-368.5,y:-340.8,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-373.3,y:-341.7,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-377.8,y:-342.7,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-382.4,y:-343.5,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-387,y:-344,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-391.7,y:-343.8,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-396.3,y:-342.5,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-400.5,y:-340.4,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-402.9,y:-338.9,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-404.8,y:-337.4,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-406.4,y:-335.5,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-406.7,y:-333.2,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-405.8,y:-331.5,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-404.3,y:-328.6,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_39B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-110.8,y:-71.9},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-143.8,y:-105},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-176.7,y:-138.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-209.5,y:-171.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-242,y:-205.5},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-274.3,y:-239.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-306.6,y:-273.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-338.8,y:-307.1},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-371,y:-341.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-372.7,y:-343.5,alpha:0.941},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-374.6,y:-345.8,alpha:0.882},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-376.4,y:-348.1,alpha:0.824},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-378.4,y:-350.3,alpha:0.765},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-380.4,y:-352.5,alpha:0.706},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-382.5,y:-354.5,alpha:0.647},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-384.8,y:-356.3,alpha:0.588},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-387.6,y:-357.8,alpha:0.529},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-390.7,y:-358.6,alpha:0.471},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-393.8,y:-358.8,alpha:0.412},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-397,y:-358.4,alpha:0.353},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-399.9,y:-357.4,alpha:0.294},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-402.6,y:-355.9,alpha:0.235},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:-405,y:-353.7,alpha:0.176},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-407,y:-351.2,alpha:0.118},0).wait(1).to({scaleX:0.05,scaleY:0.05,x:-408.5,y:-348.7,alpha:0.059},0).wait(1).to({scaleX:0.04,scaleY:0.04,x:-409.8,y:-345.6,alpha:0},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_39A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{"ballStand":0});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-126.9,y:-58.7,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-175.4,y:-80,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-222.8,y:-103.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-267.8,y:-131.6,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-308,y:-166,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-339.9,y:-208.2,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-360.4,y:-256.9,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-369.9,y:-309,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-369.7,y:-312.5,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-368.9,y:-316,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-367.6,y:-319.3,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-366,y:-322.5,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-363.9,y:-325.5,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-361.7,y:-328.2,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-359.2,y:-330.8,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-356.6,y:-333.1,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-353.7,y:-335.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-350.8,y:-337.5,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-347.8,y:-339.5,alpha:0.401},0).wait(1).to({x:-344.2,y:-340,alpha:0.369},0).wait(1).to({x:-340.7,y:-340.1,alpha:0.338},0).wait(1).to({x:-337.1,y:-339.9,alpha:0.306},0).wait(1).to({x:-333.7,y:-339.2,alpha:0.275},0).wait(1).to({x:-330.1,y:-338.2,alpha:0.243},0).wait(1).to({x:-326.8,y:-336.9,alpha:0.212},0).wait(1).to({x:-323.6,y:-335.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_38C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-123.6,y:-55.7,alpha:0.971},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-165.8,y:-80.6,alpha:0.942},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-203.7,y:-111.7,alpha:0.914},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-237,y:-147.8,alpha:0.885},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-265.1,y:-187.9,alpha:0.856},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-287.8,y:-232.5,alpha:0.827},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-303.4,y:-279.8,alpha:0.798},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-311.3,y:-330.6,alpha:0.769},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-308.3,y:-375.4,alpha:0.741},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-324.1,y:-359,alpha:0.712},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-338.3,y:-341.1,alpha:0.683},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-350.9,y:-322.1,alpha:0.654},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-361.4,y:-301.9,alpha:0.625},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-369.7,y:-280.6,alpha:0.596},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-375.2,y:-258.5,alpha:0.568},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-377.7,y:-235.8,alpha:0.539},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-380,y:-246.2,alpha:0.51},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-382.6,y:-256.5,alpha:0.481},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-385.6,y:-266.8,alpha:0.452},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-389.4,y:-276.7,alpha:0.424},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-396.5,y:-280.1,alpha:0.395},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-402,y:-263.5,alpha:0.366},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-405.3,y:-246.3,alpha:0.337},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-407.5,y:-229,alpha:0.308},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-409,y:-211.6,alpha:0.279},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-410,y:-194.1,alpha:0.251},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-410.6,y:-176.6,alpha:0.222},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-411,y:-159.1,alpha:0.193},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:-141.7,alpha:0.164},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-410.9,y:-124.1,alpha:0.135},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-427.9,y:-101,alpha:0.106},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-432.8,y:-69.3,alpha:0.078},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-435.1,y:-37.4,alpha:0.049},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:-436,y:-5.1,alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_38B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-104.9,y:-71.7,alpha:0.971},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-132,y:-104.8,alpha:0.942},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-158.9,y:-138,alpha:0.914},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-185.6,y:-171.5,alpha:0.885},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-211.8,y:-205.2,alpha:0.856},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-237.5,y:-239.4,alpha:0.827},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-262.6,y:-274.1,alpha:0.798},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-287.1,y:-309.1,alpha:0.769},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-311.2,y:-344.5,alpha:0.741},0).wait(1).to({x:-331.2,y:-349.6,alpha:0.712},0).wait(1).to({x:-351.7,y:-352.9,alpha:0.683},0).wait(1).to({x:-372.4,y:-354.6,alpha:0.654},0).wait(1).to({x:-393.1,y:-354.3,alpha:0.625},0).wait(1).to({x:-413.8,y:-351.9,alpha:0.596},0).wait(1).to({x:-433.9,y:-347.1,alpha:0.568},0).wait(1).to({x:-453.3,y:-339.7,alpha:0.539},0).wait(1).to({x:-471.4,y:-329.6,alpha:0.51},0).wait(1).to({x:-487.8,y:-316.8,alpha:0.481},0).wait(1).to({x:-502,y:-301.8,alpha:0.452},0).wait(1).to({x:-514.1,y:-284.9,alpha:0.424},0).wait(1).to({alpha:0.395},0).wait(1).to({alpha:0.366},0).wait(1).to({alpha:0.337},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.279},0).wait(1).to({alpha:0.251},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_38A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-109.7,y:-58.1,alpha:0.957},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-140.6,y:-79.1,alpha:0.915},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-170.4,y:-101.7,alpha:0.872},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-198.7,y:-126,alpha:0.83},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-225.4,y:-152.1,alpha:0.787},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-250.3,y:-179.8,alpha:0.744},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-273.2,y:-209.4,alpha:0.702},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-293.5,y:-240.8,alpha:0.659},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-310.7,y:-273.9,alpha:0.617},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-323.9,y:-308.8,alpha:0.574},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-327.8,y:-345.6,alpha:0.531},0).wait(1).to({x:-349.5,y:-345.3,alpha:0.489},0).wait(1).to({x:-371.8,y:-343.1,alpha:0.446},0).wait(1).to({x:-391.6,y:-337.9,alpha:0.403},0).wait(1).to({x:-414.4,y:-330.2,alpha:0.361},0).wait(1).to({x:-429.8,y:-321.2,alpha:0.318},0).wait(1).to({x:-447.8,y:-304,alpha:0.276},0).wait(1).to({x:-459.7,y:-285.2,alpha:0.233},0).wait(1).to({x:-466.5,y:-272,alpha:0.19},0).wait(1).to({x:-479,y:-289.6,alpha:0.148},0).wait(1).to({x:-497.4,y:-301.7,alpha:0.105},0).wait(1).to({x:-517.9,y:-310.2,alpha:0.063},0).wait(1).to({x:-538.4,y:-317.9,alpha:0.02},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_37C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-84.8,y:-73.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-93.5,y:-107.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-104,y:-140.6,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-116.6,y:-173.3,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-131.7,y:-205,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-149.4,y:-235.3,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-170,y:-263.6,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-193.7,y:-289.5,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-220.4,y:-312.1,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-250.1,y:-330.8,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-282,y:-345.4,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-278.9,y:-344.5,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-275.9,y:-343.2,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-273.1,y:-341.6,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-270.3,y:-339.9,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-267.7,y:-338.1,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-265.2,y:-336.1,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-262.7,y:-334,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-260.3,y:-331.8,alpha:0.401},0).wait(1).to({x:-254.2,y:-324.6,alpha:0.369},0).wait(1).to({x:-249.3,y:-316.6,alpha:0.338},0).wait(1).to({x:-245.1,y:-308.1,alpha:0.306},0).wait(1).to({x:-241.6,y:-299.4,alpha:0.275},0).wait(1).to({x:-238.8,y:-290.4,alpha:0.243},0).wait(1).to({x:-236.7,y:-281.3,alpha:0.212},0).wait(1).to({x:-235.8,y:-271.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_37B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-95.7,y:-66.8,alpha:0.967},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-113.7,y:-94.7,alpha:0.934},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-131.9,y:-122.6,alpha:0.902},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-150.3,y:-150.3,alpha:0.869},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-168.8,y:-178,alpha:0.836},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-187.5,y:-205.5,alpha:0.803},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-206.3,y:-233,alpha:0.77},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-225.2,y:-260.3,alpha:0.738},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-244.1,y:-287.7,alpha:0.705},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-262.5,y:-315.4,alpha:0.672},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-279.1,y:-344.3,alpha:0.639},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-272.8,y:-341.3,alpha:0.606},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-266.7,y:-338,alpha:0.574},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-260.8,y:-334.2,alpha:0.541},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-255.2,y:-330.1,alpha:0.508},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-249.9,y:-325.5,alpha:0.475},0).wait(1).to({x:-244.9,y:-320.2,alpha:0.442},0).wait(1).to({x:-240.4,y:-314.5,alpha:0.41},0).wait(1).to({x:-236.2,y:-308.5,alpha:0.377},0).wait(1).to({x:-232.4,y:-302.3,alpha:0.344},0).wait(1).to({x:-228.9,y:-295.9,alpha:0.311},0).wait(1).to({x:-225.8,y:-289.4,alpha:0.278},0).wait(1).to({x:-223.1,y:-282.6,alpha:0.246},0).wait(1).to({x:-221.1,y:-275.6,alpha:0.213},0).wait(1).to({x:-220.3,y:-268.4,alpha:0.18},0).wait(1).to({x:-218.6,y:-276},0).wait(1).to({x:-215.7,y:-283.2},0).wait(1).to({x:-211.1,y:-289.4},0).wait(1).to({x:-204.7,y:-293.7},0).wait(1).to({x:-197.1,y:-295},0).wait(1).to({x:-189.4,y:-293.7},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_37A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-111.5,y:-55.3,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-144.1,y:-73.8,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-175.5,y:-94.6,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-205.1,y:-117.7,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-232.4,y:-143.5,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-256.9,y:-172,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-277.5,y:-203.3,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-293.1,y:-237.5,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-301.9,y:-274,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-300.8,y:-311.4,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-283.8,y:-344.2,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-279.5,y:-343.3,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-275.4,y:-342,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-271.4,y:-340.2,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-267.6,y:-338,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-264.2,y:-335.5,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-261,y:-332.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-258.2,y:-329.1,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-255.9,y:-325.4,alpha:0.401},0).wait(1).to({x:-253.4,y:-320.9,alpha:0.369},0).wait(1).to({x:-251,y:-316.3,alpha:0.338},0).wait(1).to({x:-248.8,y:-311.9,alpha:0.306},0).wait(1).to({x:-246.7,y:-307.3,alpha:0.275},0).wait(1).to({x:-244.7,y:-302.7,alpha:0.243},0).wait(1).to({x:-242.7,y:-298,alpha:0.212},0).wait(1).to({x:-240.6,y:-293.4,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_36C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-80.8,y:-71.2,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-86.6,y:-103.8,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-94.2,y:-136.2,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-103.3,y:-168.2,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-113.9,y:-199.7,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-126.5,y:-230.6,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-141.7,y:-260.4,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-161,y:-287.2,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-183.7,y:-311.4,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-209.6,y:-332.9,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-235.6,y:-350.7,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-235.1,y:-345,alpha:0.531},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-234.6,y:-339.3,alpha:0.492},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-234,y:-333.7,alpha:0.453},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-233.3,y:-328,alpha:0.414},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-232.5,y:-322.3,alpha:0.375},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-231.6,y:-316.7,alpha:0.336},0).wait(1).to({x:-230.1,y:-306.9,alpha:0.297},0).wait(1).to({x:-228.5,y:-297.2,alpha:0.258},0).wait(1).to({x:-226.1,y:-287.6,alpha:0.219},0).wait(1).to({x:-222.8,y:-278.3,alpha:0.18},0).wait(1).to({x:-220,y:-284.8},0).wait(1).to({x:-216.2,y:-290.9},0).wait(1).to({x:-211.4,y:-296.2},0).wait(1).to({x:-205.2,y:-299.6},0).wait(1).to({x:-198.1,y:-299.9},0).wait(1).to({x:-191.6,y:-297.1},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_36B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-93.5,y:-66,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-109.2,y:-93.3,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-124.8,y:-120.6,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-140.5,y:-148,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-156,y:-175.4,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-171.4,y:-202.9,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-186.5,y:-230.5,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-201.3,y:-258.3,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-215.5,y:-286.4,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-228.3,y:-315.2,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-237.3,y:-345.3,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-234,y:-344.4,alpha:0.622},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-230.9,y:-343,alpha:0.59},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-227.9,y:-341.2,alpha:0.558},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-225.2,y:-339.1,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-222.7,y:-336.9,alpha:0.495},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-220.4,y:-334.4,alpha:0.464},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-218.2,y:-331.7,alpha:0.432},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-216.2,y:-328.9,alpha:0.401},0).wait(1).to({x:-212,y:-322.1,alpha:0.369},0).wait(1).to({x:-208.2,y:-315.1,alpha:0.338},0).wait(1).to({x:-204.8,y:-307.9,alpha:0.306},0).wait(1).to({x:-201.8,y:-300.5,alpha:0.275},0).wait(1).to({x:-199.5,y:-293,alpha:0.243},0).wait(1).to({x:-197.8,y:-285.2,alpha:0.212},0).wait(1).to({x:-197.2,y:-277.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_36A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-108.9,y:-55.4,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-138.8,y:-74.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-167,y:-95.4,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-193.1,y:-119.3,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-216.1,y:-146,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-235.4,y:-175.6,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-249.9,y:-207.8,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-258.7,y:-242,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-260.9,y:-277.2,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-255.7,y:-312,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-240.9,y:-343.9,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-238,y:-345.2,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-234.8,y:-345.8,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-231.6,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-228.5,y:-345.2,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-225.5,y:-344,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-222.7,y:-342.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-220.1,y:-340.6,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-217.6,y:-338.5,alpha:0.401},0).wait(1).to({x:-212.9,y:-333.5,alpha:0.369},0).wait(1).to({x:-208.9,y:-328.1,alpha:0.338},0).wait(1).to({x:-205.6,y:-322.1,alpha:0.306},0).wait(1).to({x:-203.2,y:-315.8,alpha:0.275},0).wait(1).to({x:-201.7,y:-309.2,alpha:0.243},0).wait(1).to({x:-200.8,y:-302.4,alpha:0.212},0).wait(1).to({x:-200.6,y:-295.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_35C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-79,y:-70.8,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-81.1,y:-103.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-83.9,y:-135.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-87.5,y:-168,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-92.1,y:-200.2,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-98.1,y:-232.3,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-105.9,y:-264,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-116.9,y:-295,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-134.2,y:-324.8,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-159.5,y:-346.8,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-185.4,y:-341.9,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-188.9,y:-329.9,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-190.2,y:-317.5,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-190.8,y:-304.9,alpha:0.558},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-191,y:-292.4,alpha:0.527},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-190.8,y:-279.9,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-189.7,y:-267.4,alpha:0.464},0).wait(1).to({x:-193.4,y:-273.8,alpha:0.432},0).wait(1).to({x:-197.6,y:-279.7,alpha:0.401},0).wait(1).to({x:-202.8,y:-285,alpha:0.369},0).wait(1).to({x:-209.3,y:-288.5,alpha:0.338},0).wait(1).to({x:-216.5,y:-288.4,alpha:0.306},0).wait(1).to({x:-223,y:-285.1,alpha:0.275},0).wait(1).to({x:-228.4,y:-280.1,alpha:0.243},0).wait(1).to({x:-233.1,y:-274.4,alpha:0.212},0).wait(1).to({x:-237.3,y:-268.4,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_35B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-87.9,y:-66.3,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-98.3,y:-94,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-108.7,y:-121.5,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-119.3,y:-148.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-130.2,y:-176.3,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-141.1,y:-203.6,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-152.3,y:-230.8,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-163.5,y:-258.1,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-174.7,y:-285.3,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-185.2,y:-312.8,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-192.9,y:-341.2,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-192.4,y:-332.1,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-191.9,y:-323,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-191.4,y:-313.9,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-190.9,y:-304.8,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-190.4,y:-295.7,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-189.9,y:-286.6,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-189.3,y:-277.4,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-188.6,y:-268.4,alpha:0.401},0).wait(1).to({x:-192.4,y:-274.9,alpha:0.369},0).wait(1).to({x:-197.2,y:-280.6,alpha:0.338},0).wait(1).to({x:-203.6,y:-284.5,alpha:0.306},0).wait(1).to({x:-211.1,alpha:0.275},0).wait(1).to({x:-217.6,y:-280.8,alpha:0.243},0).wait(1).to({x:-222.6,y:-275.2,alpha:0.212},0).wait(1).to({x:-226.6,y:-268.8,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_35A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-103.8,y:-59.4,alpha:0.963},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-128.6,y:-81.5,alpha:0.925},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-152,y:-105.1,alpha:0.888},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-173.5,y:-130.4,alpha:0.851},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-192.3,y:-157.7,alpha:0.814},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-207.8,y:-187.1,alpha:0.776},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-218.8,y:-218.4,alpha:0.739},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-224,y:-251.2,alpha:0.702},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-222.4,y:-284.3,alpha:0.665},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-213.3,y:-316.2,alpha:0.627},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-196.7,y:-344.8,alpha:0.59},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-192.9,y:-342,alpha:0.553},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-189.8,y:-338.5,alpha:0.515},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-187.1,y:-334.7,alpha:0.478},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-184.9,y:-330.5,alpha:0.441},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-183.2,y:-326.2,alpha:0.404},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-182,y:-321.7,alpha:0.366},0).wait(1).to({x:-179.4,y:-311,alpha:0.329},0).wait(1).to({x:-176.8,y:-300.4,alpha:0.292},0).wait(1).to({x:-174.5,y:-289.7,alpha:0.255},0).wait(1).to({x:-172.9,y:-278.9,alpha:0.217},0).wait(1).to({x:-172.3,y:-268,alpha:0.18},0).wait(1).to({x:-164,y:-279.6},0).wait(1).to({x:-155.7,y:-290.4},0).wait(1).to({x:-147.4,y:-299.6},0).wait(1).to({x:-139.1,y:-300.5},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_34C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-67,y:-59.6,alpha:0.963},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-59.3,y:-81.9,alpha:0.925},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-53.9,y:-104.9,alpha:0.888},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-50.2,y:-128.3,alpha:0.851},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-47.9,y:-151.9,alpha:0.814},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-47.1,y:-175.5,alpha:0.776},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-47.5,y:-199.2,alpha:0.739},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-49.2,y:-222.9,alpha:0.702},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-52.4,y:-246.3,alpha:0.665},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-57.4,y:-269.5,alpha:0.627},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-64.8,y:-292.1,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-75.6,y:-313.1,alpha:0.553},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-89.5,y:-332.2,alpha:0.515},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-106.7,y:-348.5,alpha:0.478},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-127.7,y:-359.2,alpha:0.441},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-145.6,y:-351.1,alpha:0.404},0).wait(1).to({x:-145.8,y:-337.1,alpha:0.366},0).wait(1).to({x:-146.2,y:-323.2,alpha:0.329},0).wait(1).to({x:-146.8,y:-309.2,alpha:0.292},0).wait(1).to({x:-147.3,y:-295.2,alpha:0.255},0).wait(1).to({x:-147.8,y:-281.3,alpha:0.217},0).wait(1).to({x:-148.2,y:-267.3,alpha:0.18},0).wait(1).to({x:-154.3,y:-278.2},0).wait(1).to({x:-164,y:-285.9},0).wait(1).to({x:-176.2,y:-288.2},0).wait(1).to({x:-187.5,y:-283.4},0).wait(1).to({x:-192.4,y:-272.3},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_34B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-83.6,y:-66.7,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-89.6,y:-94.7,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-95.6,y:-122.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-101.7,y:-150.6,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-108,y:-178.5,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-114.3,y:-206.4,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-120.8,y:-234.3,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-127.4,y:-262.1,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-134,y:-290,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-140.5,y:-317.8,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-146,y:-345.9,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-146.1,y:-348.6,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-146.3,y:-351,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-146.4,y:-353.6,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-146.5,y:-356.2,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-146.7,y:-358.7,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-146.5,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-146.3,y:-356.2,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-146.1,y:-353.4,alpha:0.401},0).wait(1).to({x:-145.4,y:-341.6,alpha:0.369},0).wait(1).to({x:-145.1,y:-329.7,alpha:0.338},0).wait(1).to({x:-144.9,y:-317.9,alpha:0.306},0).wait(1).to({x:-144.8,y:-306,alpha:0.275},0).wait(1).to({x:-144.7,y:-294.2,alpha:0.243},0).wait(1).to({x:-144.6,y:-282.3,alpha:0.212},0).wait(1).to({x:-144.2,y:-270.5,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_34A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-103.9,y:-59.8,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-128.3,y:-82.7,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-150.6,y:-107.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-170,y:-135,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-185.6,y:-164.7,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-196.1,y:-196.4,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-200.3,y:-229.6,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-197.7,y:-263,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-188,y:-295,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-171.6,y:-324.2,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-148.2,y:-347.9,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-147.2,y:-331.9,alpha:0.622},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-146,y:-315.8,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-144.6,y:-299.7,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-142.9,y:-283.7,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-140.4,y:-267.8,alpha:0.495},0).wait(1).to({x:-138.8,y:-273.8,alpha:0.464},0).wait(1).to({x:-135.8,y:-279.3,alpha:0.432},0).wait(1).to({x:-131.3,y:-283.7,alpha:0.401},0).wait(1).to({x:-125.7,y:-286.4,alpha:0.369},0).wait(1).to({x:-119.5,y:-287.2,alpha:0.338},0).wait(1).to({x:-113.3,y:-286.4,alpha:0.306},0).wait(1).to({x:-107.6,y:-284.1,alpha:0.275},0).wait(1).to({x:-102.4,y:-280.4,alpha:0.243},0).wait(1).to({x:-98.4,y:-275.7,alpha:0.212},0).wait(1).to({x:-95.6,y:-270.1,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_33C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-94.5,y:-66.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-109.2,y:-95.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-121.4,y:-125.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-130.7,y:-156.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-136.4,y:-188.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-137.9,y:-220.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-134.9,y:-252.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-127.1,y:-284.3},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-114.8,y:-314.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-98.5,y:-342.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-83.7,y:-350.3},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-66.6,y:-352.4},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-49.5,y:-350.9},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-33.1,y:-345.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-18.7,y:-336.7},0).wait(1).to({x:-13.5,y:-331.5,alpha:0.9},0).wait(1).to({x:-9,y:-325.7,alpha:0.8},0).wait(1).to({x:-5.4,y:-319.3,alpha:0.7},0).wait(1).to({x:-2.9,y:-312.4,alpha:0.6},0).wait(1).to({x:-1.5,y:-305.2,alpha:0.5},0).wait(1).to({x:-1.3,y:-297.9,alpha:0.4},0).wait(1).to({x:-2.1,y:-290.6,alpha:0.3},0).wait(1).to({x:-3.8,y:-283.5,alpha:0.2},0).wait(1).to({x:-6.4,y:-276.7,alpha:0.1},0).wait(1).to({x:-9.8,y:-270.2,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_33B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-79.7,y:-68.9},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-81.5,y:-99},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-83.4,y:-129},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-85.3,y:-159.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-87.1,y:-189.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-89,y:-219.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-90.9,y:-249.5},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-92.7,y:-279.6},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-94.6,y:-309.7},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-96.5,y:-339.8},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-96.4,y:-334.5},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-96.3,y:-329.1},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-96.2,y:-323.8},0).wait(1).to({scaleX:0.11,scaleY:0.11,y:-318.5},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-96.1,y:-313.1},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-96,y:-307.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:-302.5},0).wait(1).to({x:-96.1,y:-297.5,alpha:0.875},0).wait(1).to({x:-96.3,y:-292.6,alpha:0.75},0).wait(1).to({x:-96.5,y:-287.7,alpha:0.625},0).wait(1).to({x:-96.7,y:-282.8,alpha:0.5},0).wait(1).to({x:-96.9,y:-277.9,alpha:0.375},0).wait(1).to({x:-97.1,y:-272.9,alpha:0.25},0).wait(1).to({x:-97.3,y:-268,alpha:0.125},0).wait(1).to({x:-97.5,y:-263.1,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_33A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-61.9,y:-69.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-47.4,y:-100.9},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-34.8,y:-133.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-24.8,y:-166.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-19.1,y:-200.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-19.8,y:-234.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-29.6,y:-267.8},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-48.5,y:-296.7},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-72.9,y:-321.2},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-99.6,y:-343.3},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-112.7,y:-350.6},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-127.3,y:-354.6},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-142.3,y:-355.7},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-157.3,y:-353.8},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-171.6,y:-348.9},0).wait(1).to({x:-179.1,y:-344.3,alpha:0.9},0).wait(1).to({x:-185.6,y:-338.5,alpha:0.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-191.4,y:-331.9,alpha:0.7},0).wait(1).to({x:-196.4,y:-324.7,alpha:0.6},0).wait(1).to({x:-201,y:-317.2,alpha:0.5},0).wait(1).to({x:-205.2,y:-309.5,alpha:0.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-209.1,y:-301.7,alpha:0.3},0).wait(1).to({x:-212.8,y:-293.7,alpha:0.2},0).wait(1).to({x:-216.4,y:-285.7,alpha:0.1},0).wait(1).to({x:-220.4,y:-277.9,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_26C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-81.1,y:-88.5,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-100.3,y:-139.4,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-132.2,y:-183.5,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-172.4,y:-220.3,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-217.8,y:-250.5,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-266.4,y:-275.1,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-317.4,y:-294.6,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-370.1,y:-308.6,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-374.8,y:-309.5,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-379.4,y:-310.4,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-384,y:-311.2,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-388.6,y:-311.7,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-393.3,y:-311.5,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-397.9,y:-310.3,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-402.1,y:-308.2,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-404.5,y:-306.6,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-406.4,y:-305.2,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-408,y:-303.3,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-408.3,y:-300.9,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-407.4,y:-299.3,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-405.9,y:-296.4,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_26B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-111.4,y:-67.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-144.4,y:-96.5},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-177.2,y:-126},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-209.9,y:-155.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-242.4,y:-185.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-274.9,y:-215.2},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-307.3,y:-245.2},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-339.5,y:-275.3},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-371.5,y:-305.7},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-373.9,y:-306.8,alpha:0.949},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-376.4,y:-307.9,alpha:0.898},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-378.9,y:-308.8,alpha:0.847},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-380.9,y:-309.3,alpha:0.796},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-384.3,y:-309.8,alpha:0.744},0).wait(1).to({x:-401,y:-305.4,alpha:0.693},0).wait(1).to({x:-413.1,y:-293.3,alpha:0.642},0).wait(1).to({x:-418.4,y:-276.9,alpha:0.591},0).wait(1).to({x:-418.9,y:-259.5,alpha:0.54},0).wait(1).to({x:-427.7,y:-275.3,alpha:0.489},0).wait(1).to({x:-439,y:-289.5,alpha:0.438},0).wait(1).to({x:-454.2,y:-298.9,alpha:0.387},0).wait(1).to({x:-471.6,y:-295.7,alpha:0.336},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.131},0).wait(1).to({alpha:0.08},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_26A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-127.2,y:-58.6,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-176.2,y:-79.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-224.4,y:-101.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-270.5,y:-128.1,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-312.5,y:-160.8,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-346.3,y:-201.6,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-368.3,y:-249.9,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-378.3,y:-302.1,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-377.9,y:-303.7,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-377.4,y:-305.3,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-376.6,y:-306.9,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-375.7,y:-308.3,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-374.6,y:-309.7,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-373.5,y:-310.9,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-372.1,y:-312,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-370.7,y:-313,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-369.3,y:-313.9,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-367.8,y:-314.6,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-366.1,y:-315.2,alpha:0.401},0).wait(1).to({x:-364,y:-314.4,alpha:0.369},0).wait(1).to({x:-362,y:-313.4,alpha:0.338},0).wait(1).to({x:-360.2,y:-312.2,alpha:0.306},0).wait(1).to({x:-358.5,y:-310.7,alpha:0.275},0).wait(1).to({x:-357.3,y:-308.9,alpha:0.243},0).wait(1).to({x:-356.8,y:-307.7,alpha:0.212},0).wait(1).to({x:-356.7,y:-304.4,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_25C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-119.5,y:-52.2,alpha:0.971},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-159.6,y:-70.6,alpha:0.942},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-197.2,y:-93.7,alpha:0.914},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-231.3,y:-121.7,alpha:0.885},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-260.9,y:-154.4,alpha:0.856},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-285.5,y:-192.4,alpha:0.827},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-305,y:-232.1,alpha:0.798},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-317.3,y:-273.9,alpha:0.769},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-313.4,y:-316.8,alpha:0.741},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-329.2,y:-318.7,alpha:0.712},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-345,y:-317,alpha:0.683},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-359.6,y:-310.8,alpha:0.654},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-371.2,y:-299.9,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-378.7,y:-286,alpha:0.596},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-382.8,y:-270.6,alpha:0.568},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-384.3,y:-254.7,alpha:0.539},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-396.2,y:-274.2,alpha:0.51},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-411.9,y:-290.8,alpha:0.481},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-433,y:-291.8,alpha:0.452},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-444.8,y:-272.5,alpha:0.424},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-450.8,y:-250.3,alpha:0.395},0).wait(1).to({x:-453.2,y:-263.3,alpha:0.366},0).wait(1).to({x:-461.6,y:-273.6,alpha:0.337},0).wait(1).to({x:-473.5,y:-279.7,alpha:0.308},0).wait(1).to({x:-486.7,y:-281.7,alpha:0.279},0).wait(1).to({x:-499.9,y:-279.9,alpha:0.251},0).wait(1).to({x:-512.1,y:-274.5,alpha:0.222},0).wait(1).to({x:-522.3,y:-265.9,alpha:0.193},0).wait(1).to({x:-530,y:-255,alpha:0.164},0).wait(1).to({x:-535,y:-242.5,alpha:0.135},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_25B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-105.4,y:-68.6,alpha:0.966},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-133.2,y:-98.3,alpha:0.932},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-161.2,y:-127.8,alpha:0.899},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-189.4,y:-157.1,alpha:0.865},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-217.6,y:-186.4,alpha:0.831},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-245.8,y:-215.7,alpha:0.797},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-273.7,y:-245.3,alpha:0.763},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-300.9,y:-275.6,alpha:0.73},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-325.6,y:-307.9,alpha:0.696},0).wait(1).to({x:-344.6,y:-314.2,alpha:0.662},0).wait(1).to({x:-364,y:-318.7,alpha:0.628},0).wait(1).to({x:-383.9,y:-321.5,alpha:0.594},0).wait(1).to({x:-403.8,y:-322.3,alpha:0.561},0).wait(1).to({x:-423.8,y:-320.8,alpha:0.527},0).wait(1).to({x:-443.4,y:-316.7,alpha:0.493},0).wait(1).to({x:-462.2,y:-309.9,alpha:0.459},0).wait(1).to({x:-479.7,y:-300.2,alpha:0.426},0).wait(1).to({x:-495.4,y:-287.9,alpha:0.392},0).wait(1).to({x:-509,y:-273.3,alpha:0.358},0).wait(1).to({x:-520.6,y:-256.9,alpha:0.324},0).wait(1).to({x:-522,y:-261.7,alpha:0.29},0).wait(1).to({x:-523.6,y:-266.3,alpha:0.257},0).wait(1).to({x:-525.6,y:-270.8,alpha:0.223},0).wait(1).to({x:-528,y:-275.1,alpha:0.189},0).wait(1).to({x:-531.1,y:-278.9,alpha:0.155},0).wait(1).to({x:-535.1,y:-281.7,alpha:0.121},0).wait(1).to({x:-539.9,y:-282.4,alpha:0.088},0).wait(1).to({x:-544.5,y:-280.6,alpha:0.054},0).wait(1).to({x:-548.3,y:-277.5,alpha:0.02},0).wait(1).to({x:-551.6,y:-273.8},0).wait(1).to({x:-554.4,y:-269.8},0).wait(1).to({x:-557,y:-265.7},0).wait(1).to({x:-559.1,y:-261.8},0).wait(1).to({x:-561.6,y:-256.9},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_25A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-107.6,y:-56.5,alpha:0.957},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-136.7,y:-75.2,alpha:0.915},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-165.1,y:-95.1,alpha:0.872},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-192.6,y:-116.2,alpha:0.83},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-219,y:-138.5,alpha:0.787},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-244.2,y:-162.3,alpha:0.744},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-267.9,y:-187.7,alpha:0.702},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-289.5,y:-214.8,alpha:0.659},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-308.4,y:-243.8,alpha:0.617},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-323.2,y:-275.1,alpha:0.574},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-327.8,y:-309,alpha:0.531},0).wait(1).to({x:-347.8,y:-308.8,alpha:0.489},0).wait(1).to({x:-369.8,y:-306.8,alpha:0.446},0).wait(1).to({x:-387.7,y:-304.7,alpha:0.403},0).wait(1).to({x:-411.4,y:-301.6,alpha:0.361},0).wait(1).to({x:-428.4,y:-297.9,alpha:0.318},0).wait(1).to({x:-449.3,y:-287.7,alpha:0.276},0).wait(1).to({x:-462.5,y:-271.8,alpha:0.233},0).wait(1).to({x:-469.3,y:-262.6,alpha:0.19},0).wait(1).to({x:-481.2,y:-279.3,alpha:0.148},0).wait(1).to({x:-499.3,y:-289.3,alpha:0.105},0).wait(1).to({x:-519.9,y:-290.5,alpha:0.063},0).wait(1).to({x:-538.4,y:-281.3,alpha:0.02},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_24C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-84.4,y:-71.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-92.6,y:-103.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-102.8,y:-134.5,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-115.2,y:-165.1,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-130.2,y:-194.5,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-148.2,y:-222.2,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-169.6,y:-247.3,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-194.4,y:-269.1,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-222.2,y:-286.8,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-252.2,y:-300.6,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-283.3,y:-312,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-280.2,y:-311.1,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-277.2,y:-309.8,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-274.3,y:-308.2,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-271.6,y:-306.5,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-268.9,y:-304.7,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-266.4,y:-302.7,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-264,y:-300.6,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-261.5,y:-298.4,alpha:0.401},0).wait(1).to({x:-257,y:-294.1,alpha:0.369},0).wait(1).to({x:-252.6,y:-289.8,alpha:0.338},0).wait(1).to({x:-248.3,y:-285.3,alpha:0.306},0).wait(1).to({x:-244.4,y:-280.4,alpha:0.275},0).wait(1).to({x:-241.1,y:-275.2,alpha:0.243},0).wait(1).to({x:-238.4,y:-269.6,alpha:0.212},0).wait(1).to({x:-236,y:-263.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_24B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-94.5,y:-64.7,alpha:0.967},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-111.6,y:-90.5,alpha:0.934},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-129.1,y:-116,alpha:0.902},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-147,y:-141.2,alpha:0.869},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-165.4,y:-166.1,alpha:0.836},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-184.2,y:-190.6,alpha:0.803},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-203.6,y:-214.7,alpha:0.77},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-223.6,y:-238.3,alpha:0.738},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-243.9,y:-261.7,alpha:0.705},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-264,y:-285.1,alpha:0.672},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-281.2,y:-310.8,alpha:0.639},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-276.7,y:-311.4,alpha:0.606},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-272.3,y:-310.3,alpha:0.574},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-268.3,y:-308.2,alpha:0.541},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-264.7,y:-305.5,alpha:0.508},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-261.3,y:-302.4,alpha:0.475},0).wait(1).to({x:-257.1,y:-298.1,alpha:0.442},0).wait(1).to({x:-252.8,y:-293.8,alpha:0.41},0).wait(1).to({x:-248.6,y:-289.5,alpha:0.377},0).wait(1).to({x:-244.4,y:-285.3,alpha:0.344},0).wait(1).to({x:-240.1,y:-281,alpha:0.311},0).wait(1).to({x:-235.8,y:-276.8,alpha:0.278},0).wait(1).to({x:-231.4,y:-272.7,alpha:0.246},0).wait(1).to({x:-226.9,y:-268.7,alpha:0.213},0).wait(1).to({x:-222.4,y:-264.8,alpha:0.18},0).wait(1).to({x:-214.1,y:-268.8},0).wait(1).to({x:-205.4,y:-271.8},0).wait(1).to({x:-196.4,y:-273.3},0).wait(1).to({x:-187.2,y:-273},0).wait(1).to({x:-178.5,y:-270.1},0).wait(1).to({x:-171.1,y:-264.8},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_24A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-109.3,y:-53.9,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-140.1,y:-70.5,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-170,y:-88.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-198.7,y:-108.6,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-225.8,y:-130.7,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-250.8,y:-155.2,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-272.7,y:-182.4,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-290,y:-212.8,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-300.2,y:-246.1,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-299.2,y:-280.9,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-282.1,y:-310.8,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-274.9,y:-309.1,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-268.2,y:-305.8,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-262.5,y:-301.2,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-257.9,y:-295.4,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-254.4,y:-288.9,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-252.1,y:-281.9,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-250.7,y:-274.6,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-250.2,y:-267.2,alpha:0.401},0).wait(1).to({x:-247.2,y:-273.5,alpha:0.369},0).wait(1).to({x:-242.3,y:-278.3,alpha:0.338},0).wait(1).to({x:-235.7,y:-280.5,alpha:0.306},0).wait(1).to({x:-228.8,y:-279.9,alpha:0.275},0).wait(1).to({x:-222.4,y:-277.3,alpha:0.243},0).wait(1).to({x:-216.8,y:-273.3,alpha:0.212},0).wait(1).to({x:-212.3,y:-268.1,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_23C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-80.7,y:-70.1,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-86.1,y:-101.1,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-93.1,y:-131.8,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-101.5,y:-162.2,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-111.2,y:-192.2,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-122.6,y:-221.6,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-136,y:-250.2,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-152.8,y:-277,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-176.2,y:-301.8,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-206.8,y:-317.4,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-231.5,y:-322.5,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-238.3,y:-319.8,alpha:0.531},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-244.8,y:-316.6,alpha:0.492},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-251,y:-312.7,alpha:0.453},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-256.4,y:-307.8,alpha:0.414},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-260.3,y:-301.6,alpha:0.375},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-261.1,y:-294.5,alpha:0.336},0).wait(1).to({x:-258.8,y:-285.4,alpha:0.297},0).wait(1).to({x:-256.5,y:-276.3,alpha:0.258},0).wait(1).to({x:-254.2,y:-267.2,alpha:0.219},0).wait(1).to({x:-246.2,alpha:0.18},0).wait(1).to({x:-238.3,y:-267.1},0).wait(1).to({x:-230.4},0).wait(1).to({x:-222.5},0).wait(1).to({x:-214.6,y:-267.2},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_23B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-92.7,y:-63.3,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-107.8,y:-88,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-122.8,y:-112.5,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-138,y:-137.1,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-153.1,y:-161.6,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-168.3,y:-186.1,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-183.4,y:-210.6,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-198.4,y:-235.3,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-212.8,y:-260.2,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-225.8,y:-285.9,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-234.4,y:-313.4,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-234.2,y:-307.4,alpha:0.622},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-233.9,y:-301.4,alpha:0.59},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-233.7,y:-295.4,alpha:0.558},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-233.4,y:-289.4,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-233.1,y:-283.4,alpha:0.495},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-232.8,y:-277.4,alpha:0.464},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-232.5,y:-271.4,alpha:0.432},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-232.2,y:-265.4,alpha:0.401},0).wait(1).to({x:-236.1,y:-270.3,alpha:0.369},0).wait(1).to({x:-240.7,y:-274.7,alpha:0.338},0).wait(1).to({x:-246.2,y:-278,alpha:0.306},0).wait(1).to({x:-252.4,y:-279,alpha:0.275},0).wait(1).to({x:-258,y:-276.4,alpha:0.243},0).wait(1).to({x:-261.1,y:-270.9,alpha:0.212},0).wait(1).to({x:-262,y:-264.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_23A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-106.8,y:-54.1,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-134.8,y:-71.3,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-161.5,y:-90.4,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-186.6,y:-111.7,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-209.5,y:-135.2,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-229.7,y:-161.1,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-246.4,y:-189.3,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-258.6,y:-219.8,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-264.7,y:-252,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-262,y:-284.6,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-241.8,y:-308.1,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-237.3,y:-303.5,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-233.1,y:-298.5,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-229.4,y:-293.2,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-226.1,y:-287.6,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-223.2,y:-281.8,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-220.9,y:-275.7,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-219.2,y:-269.5,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-218.1,y:-263.1,alpha:0.401},0).wait(1).to({x:-215,y:-271.3,alpha:0.369},0).wait(1).to({x:-209.7,y:-278.2,alpha:0.338},0).wait(1).to({x:-202.4,y:-283.1,alpha:0.306},0).wait(1).to({x:-193.9,y:-285.5,alpha:0.275},0).wait(1).to({x:-185.2,y:-285.2,alpha:0.243},0).wait(1).to({x:-176.8,y:-282.6,alpha:0.212},0).wait(1).to({x:-169.5,y:-277.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_22C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-81.5,y:-68.7,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-88.3,y:-98.4,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-96.6,y:-127.6,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-106.1,y:-156.5,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-116.5,y:-185,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-127.9,y:-213.2,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-140.3,y:-241,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-154.1,y:-268.2,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-170.1,y:-294.3,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-197.3,y:-314.9,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-222.4,y:-315.4,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-230.1,y:-311.6,alpha:0.531},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-237.6,y:-307.4,alpha:0.492},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-244.6,y:-302.5,alpha:0.453},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-251,y:-296.8,alpha:0.414},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-256.1,y:-289.8,alpha:0.375},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-257.5,y:-281.5,alpha:0.336},0).wait(1).to({x:-252.6,y:-276.7,alpha:0.297},0).wait(1).to({x:-247.6,y:-272,alpha:0.258},0).wait(1).to({x:-242.6,y:-267.5,alpha:0.219},0).wait(1).to({x:-234.9,y:-270.9,alpha:0.18},0).wait(1).to({x:-226.9,y:-273.2},0).wait(1).to({x:-218.6,y:-274},0).wait(1).to({x:-210.5,y:-272.3},0).wait(1).to({x:-204,y:-267.2},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_22B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-89,y:-63.5,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-100.1,y:-88.3,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-111.3,y:-113.1,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-122.6,y:-137.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-133.7,y:-162.7,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-144.9,y:-187.5,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-155.9,y:-212.4,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-166.8,y:-237.3,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-177.1,y:-262.5,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-186.3,y:-288.1,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-192.6,y:-314.5,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-193.6,y:-308.6,alpha:0.622},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-194.6,y:-302.7,alpha:0.59},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-195.4,y:-296.7,alpha:0.558},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-196.1,y:-290.8,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-196.6,y:-284.8,alpha:0.495},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-197,y:-278.8,alpha:0.464},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-197.2,y:-272.8,alpha:0.432},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-197.1,y:-266.9,alpha:0.401},0).wait(1).to({x:-205,y:-273.9,alpha:0.369},0).wait(1).to({x:-214.9,y:-278,alpha:0.338},0).wait(1).to({x:-225.4,y:-279.7,alpha:0.306},0).wait(1).to({x:-236.2,y:-279.6,alpha:0.275},0).wait(1).to({x:-246.7,y:-277.7,alpha:0.243},0).wait(1).to({x:-256.4,y:-273.3,alpha:0.212},0).wait(1).to({x:-262,y:-264.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_22A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-106.1,y:-53.9,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-133.2,y:-71.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-158.7,y:-90.6,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-182.1,y:-112.7,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-202.3,y:-137.6,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-218.5,y:-165.3,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-229.3,y:-195.6,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-233.5,y:-227.3,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-230.2,y:-259.2,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-218.3,y:-288.9,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-194.2,y:-308.6,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-189.6,y:-303.9,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-185.5,y:-298.9,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-181.8,y:-293.6,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-178.4,y:-288.1,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-175.6,y:-282.2,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-173.2,y:-276.2,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-171.5,y:-270,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-170.5,y:-263.6,alpha:0.401},0).wait(1).to({x:-167.4,y:-271.7,alpha:0.369},0).wait(1).to({x:-162,y:-278.7,alpha:0.338},0).wait(1).to({x:-154.7,y:-283.5,alpha:0.306},0).wait(1).to({x:-146.3,y:-285.9,alpha:0.275},0).wait(1).to({x:-137.5,y:-285.7,alpha:0.243},0).wait(1).to({x:-129.2,y:-283,alpha:0.212},0).wait(1).to({x:-121.8,y:-278.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_21C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-67.8,y:-57.5,alpha:0.963},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-60.8,y:-77.5,alpha:0.925},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-56.2,y:-98.2,alpha:0.888},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-53.5,y:-119.3,alpha:0.851},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-52.4,y:-140.6,alpha:0.814},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-52.8,y:-161.9,alpha:0.776},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-54.6,y:-183.1,alpha:0.739},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-57.7,y:-204.2,alpha:0.702},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-62.2,y:-225,alpha:0.665},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-68.2,y:-245.5,alpha:0.627},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-76.1,y:-265.3,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-86.1,y:-284.2,alpha:0.553},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-98.5,y:-301.6,alpha:0.515},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-114.1,y:-316.1,alpha:0.478},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-133.5,y:-322.7,alpha:0.441},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-147,y:-309.4,alpha:0.404},0).wait(1).to({x:-146.9,y:-302.3,alpha:0.366},0).wait(1).to({x:-147.1,y:-295.3,alpha:0.329},0).wait(1).to({x:-147.5,y:-288.5,alpha:0.292},0).wait(1).to({x:-147.8,y:-281.3,alpha:0.255},0).wait(1).to({x:-148.1,y:-274.3,alpha:0.217},0).wait(1).to({x:-148.2,y:-267.3,alpha:0.18},0).wait(1).to({x:-155.1,y:-278.9},0).wait(1).to({x:-165.9,y:-286.9},0).wait(1).to({x:-179,y:-289.9},0).wait(1).to({x:-192,y:-286.6},0).wait(1).to({x:-198.5,y:-275.5},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_21B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-83.1,y:-64,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-88.5,y:-89.2,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-93.9,y:-114.4,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-99.6,y:-139.6,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-105.3,y:-164.8,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-111.2,y:-189.9,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-117.3,y:-214.9,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-123.7,y:-240,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-130.2,y:-264.9,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-136.7,y:-289.9,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-141.9,y:-315.2,alpha:0.653},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-142.6,y:-309.3,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-143.2,y:-303.4,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-143.6,y:-297.4,alpha:0.558},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-144,y:-291.5,alpha:0.527},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-144.3,y:-285.6,alpha:0.495},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-144.5,y:-279.7,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:-273.7,alpha:0.432},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-144.2,y:-267.8,alpha:0.401},0).wait(1).to({x:-149.2,y:-274.8,alpha:0.369},0).wait(1).to({x:-156.6,y:-279.2,alpha:0.338},0).wait(1).to({x:-165.2,y:-280.7,alpha:0.306},0).wait(1).to({x:-173.8,y:-279.7,alpha:0.275},0).wait(1).to({x:-182.1,y:-277.1,alpha:0.243},0).wait(1).to({x:-189.8,y:-273,alpha:0.212},0).wait(1).to({x:-196.4,y:-267.4,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_21A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-102.1,y:-58.2,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-125.3,y:-79,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-146.8,y:-101.5,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-166.2,y:-125.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-182.5,y:-152.4,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-194.5,y:-181.1,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-200.7,y:-211.6,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-199.3,y:-242.7,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-189.6,y:-272.2,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-171.9,y:-297.7,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-146.8,y:-315.7,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-131,y:-312,alpha:0.622},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-117,y:-303.8,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-105.2,y:-292.8,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-95.3,y:-279.9,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-87.3,y:-265.9,alpha:0.495},0).wait(1).to({x:-84.6,y:-271.2,alpha:0.464},0).wait(1).to({x:-80.7,y:-276,alpha:0.432},0).wait(1).to({x:-75.8,y:-279.2,alpha:0.401},0).wait(1).to({x:-70.1,y:-280.5,alpha:0.369},0).wait(1).to({x:-64.1,y:-280.2,alpha:0.338},0).wait(1).to({x:-58.4,y:-278.6,alpha:0.306},0).wait(1).to({x:-52.9,y:-276.2,alpha:0.275},0).wait(1).to({x:-47.7,y:-273.2,alpha:0.243},0).wait(1).to({x:-42.8,y:-269.7,alpha:0.212},0).wait(1).to({x:-38.3,y:-265.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_20C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-42.6,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-21.7,y:-63.1},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-2.6,y:-88.9},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:13.6,y:-116.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:25.9,y:-146},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:31.2,y:-177.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:26.6,y:-209},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:12,y:-237.5},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-8.5,y:-261.9},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-32.4,y:-283.3},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-57.3,y:-303.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-76.3,y:-308.4},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-96.1,y:-308.8},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-115.9,y:-307.7},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-135.6,y:-305.3},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-155.2,y:-301.6},0).wait(1).to({x:-162.3,y:-299.7,alpha:0.9},0).wait(1).to({x:-169.3,y:-297.5,alpha:0.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-176.3,y:-295.1,alpha:0.7},0).wait(1).to({x:-183.1,y:-292.5,alpha:0.6},0).wait(1).to({x:-189.9,y:-289.5,alpha:0.5},0).wait(1).to({x:-196.5,y:-286.3,alpha:0.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-202.9,y:-282.7,alpha:0.3},0).wait(1).to({x:-209.1,y:-278.8,alpha:0.2},0).wait(1).to({x:-214.9,y:-274.2,alpha:0.1},0).wait(1).to({x:-219.7,y:-268.7,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-82,86.3,86.3);


(lib.ball_20B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.43,scaleY:0.43,x:-81.1,y:-75.8},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-84.5,y:-112.8},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-87.8,y:-149.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-91.1,y:-186.9},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-94.4,y:-224},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-97.8,y:-261},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-101.1,y:-298.1},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-97.8,y:-291.1},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-95.3,y:-283.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-93.5,y:-276.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-92.5,y:-268.9},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-92.6,y:-261.2},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-90.8,y:-263.6},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-89.1,y:-266},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-87.1,y:-268.1},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-84.5,y:-268},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-82.5,y:-265.9},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-80.9,y:-263.2},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-79.2,y:-256.3},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-78.6,y:-249.2},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-78.4,y:-242.2},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-78.3,y:-235.1},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-78.5,y:-228},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_20A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-80,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-100.6,y:-62.5},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-120.2,y:-87.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-138.2,y:-113.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-153.8,y:-140.6},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-165.5,y:-169.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-170.4,y:-200.9},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-165.2,y:-231.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-150.1,y:-259.4},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-129,y:-282.8},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-105.1,y:-303.4},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-87,y:-307.9},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-68.1,y:-307.5},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-49.4,y:-304.9},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-31.1,y:-300.5},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-13.4,y:-294},0).wait(1).to({x:-7,y:-291.2,alpha:0.9},0).wait(1).to({x:-0.6,y:-288.5,alpha:0.8},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:5.6,y:-285.8,alpha:0.7},0).wait(1).to({x:12,y:-283.2,alpha:0.6},0).wait(1).to({x:18.5,y:-280.6,alpha:0.5},0).wait(1).to({x:24.9,y:-277.8,alpha:0.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:31.2,y:-274.9,alpha:0.3},0).wait(1).to({x:37.3,y:-271.6,alpha:0.2},0).wait(1).to({x:43,y:-267.8,alpha:0.1},0).wait(1).to({x:47.8,y:-262.7,alpha:0},0).wait(3)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.2,-82,86.3,86.3);


(lib.ball_13C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.8,-34.4,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-81.1,y:-86.4,alpha:0.952},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-101.2,y:-134.6,alpha:0.905},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-135.1,y:-174.4,alpha:0.857},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-177.4,y:-205.2,alpha:0.81},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-224.1,y:-228.8,alpha:0.762},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-273.3,y:-247,alpha:0.714},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-323.8,y:-261.1,alpha:0.667},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-375.1,y:-272.2,alpha:0.619},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-382.8,y:-272.6,alpha:0.571},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-390.6,y:-271.8,alpha:0.524},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-398.2,y:-270.1,alpha:0.476},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-405.6,y:-267.9,alpha:0.429},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-412.9,y:-265.1,alpha:0.381},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-420,y:-262,alpha:0.333},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-426.9,y:-258.4,alpha:0.286},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-439.2,y:-265,alpha:0.238},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-452.9,y:-267.9,alpha:0.19},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-467,y:-268.8,alpha:0.143},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-481,y:-268.1,alpha:0.095},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-494.9,y:-265.6,alpha:0.048},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-507.9,y:-260.3,alpha:0},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-77.6,86.3,86.3);


(lib.ball_13B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-111.5,y:-64.4},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-145.1,y:-90.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-178.7,y:-116},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-212.1,y:-142.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-245.4,y:-168.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-278.4,y:-194.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-311.2,y:-221.8},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-343.5,y:-249.3},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-374.9,y:-277.8},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-386,y:-281.2,alpha:0.949},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-397.6,y:-282,alpha:0.898},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-408.9,y:-279.3,alpha:0.847},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-418.5,y:-272.8,alpha:0.796},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-425.5,y:-263.4,alpha:0.744},0).wait(1).to({x:-429.3,y:-268.9,alpha:0.693},0).wait(1).to({x:-435.1,y:-271.8,alpha:0.642},0).wait(1).to({x:-441.2,y:-268.8,alpha:0.591},0).wait(1).to({x:-445.1,y:-263.4,alpha:0.54},0).wait(1).to({x:-450.3,y:-269.8,alpha:0.489},0).wait(1).to({x:-457.9,y:-272.8,alpha:0.438},0).wait(1).to({x:-465.9,y:-271.1,alpha:0.387},0).wait(1).to({x:-470.9,y:-264.6,alpha:0.336},0).wait(1).to({alpha:0.284},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.131},0).wait(1).to({alpha:0.08},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_13A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-127.2,y:-58.6,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-176.2,y:-79.1,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-224.4,y:-101.7,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-270.5,y:-128.1,alpha:0.874},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-312.5,y:-160.8,alpha:0.842},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-346.3,y:-201.6,alpha:0.811},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-368.3,y:-249.9,alpha:0.779},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-378.3,y:-302.1,alpha:0.748},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-377.6,y:-304.1,alpha:0.716},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-376.7,y:-306.1,alpha:0.685},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-375.6,y:-308,alpha:0.653},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-374.3,y:-309.8,alpha:0.622},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-372.9,y:-311.4,alpha:0.59},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-371.3,y:-312.9,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-369.6,y:-314.3,alpha:0.527},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-367.7,y:-315.4,alpha:0.495},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-365.7,y:-316.3,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-363.7,y:-317,alpha:0.432},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-361.5,y:-317.6,alpha:0.401},0).wait(1).to({x:-358.8,y:-317.8,alpha:0.369},0).wait(1).to({x:-356.2,y:-317.3,alpha:0.338},0).wait(1).to({x:-353.6,y:-316.5,alpha:0.306},0).wait(1).to({x:-351.2,y:-315.4,alpha:0.275},0).wait(1).to({x:-349,y:-313.9,alpha:0.243},0).wait(1).to({x:-347.6,y:-312.7,alpha:0.212},0).wait(1).to({x:-345.4,y:-309.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_12C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-90.2,y:-80.9,alpha:0.971},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-104.3,y:-121.3,alpha:0.942},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-121.6,y:-159.2,alpha:0.914},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-142,y:-197.1,alpha:0.885},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-165.7,y:-236.1,alpha:0.856},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-195.5,y:-267.2,alpha:0.827},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-231.8,y:-291.1,alpha:0.798},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:-272.6,y:-307.8,alpha:0.769},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-313.4,y:-316.8,alpha:0.741},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-343.1,y:-317.6,alpha:0.712},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-372.7,y:-316.5,alpha:0.683},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-402.3,y:-313.2,alpha:0.654},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-431.3,y:-306.9,alpha:0.625},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-458.8,y:-295.8,alpha:0.596},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:-481.3,y:-276.8,alpha:0.568},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:-490.8,y:-249.1,alpha:0.539},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-501.5,y:-254,alpha:0.51},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-512.5,y:-258.4,alpha:0.481},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-523.7,y:-262.1,alpha:0.452},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-535,y:-265.3,alpha:0.424},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-546.6,y:-267.8,alpha:0.395},0).wait(1).to({x:-558.3,y:-269.6,alpha:0.366},0).wait(1).to({x:-570.1,y:-270.4,alpha:0.337},0).wait(1).to({x:-581.9,y:-270.2,alpha:0.308},0).wait(1).to({x:-593.6,y:-268.6,alpha:0.279},0).wait(1).to({x:-605,y:-265.6,alpha:0.251},0).wait(1).to({x:-615.8,y:-260.8,alpha:0.222},0).wait(1).to({x:-625.6,y:-254.3,alpha:0.193},0).wait(1).to({x:-634.2,y:-246.3,alpha:0.164},0).wait(1).to({x:-641.5,y:-236.9,alpha:0.135},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.02},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_12B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-98.8,y:-60,alpha:0.957},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-119.8,y:-81.2,alpha:0.915},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-140.8,y:-102.5,alpha:0.872},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-161.9,y:-123.7,alpha:0.83},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-182.9,y:-145,alpha:0.787},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-203.9,y:-166.2,alpha:0.744},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-224.9,y:-187.4,alpha:0.702},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-245.9,y:-208.7,alpha:0.659},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-266.9,y:-229.9,alpha:0.617},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-287.9,y:-251.2,alpha:0.574},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-309,y:-272.4,alpha:0.531},0).wait(1).to({x:-331.7,y:-281.4,alpha:0.489},0).wait(1).to({x:-357.8,y:-291.6,alpha:0.446},0).wait(1).to({x:-382.7,y:-301.4,alpha:0.403},0).wait(1).to({x:-407.8,y:-311.3,alpha:0.361},0).wait(1).to({x:-437.7,y:-323.1,alpha:0.318},0).wait(1).to({x:-450.4,y:-327.9,alpha:0.276},0).wait(1).to({x:-480.5,y:-339.1,alpha:0.233},0).wait(1).to({x:-505.7,y:-348.5,alpha:0.19},0).wait(1).to({x:-530.7,y:-357.8,alpha:0.148},0).wait(1).to({x:-555.7,y:-367.1,alpha:0.105},0).wait(1).to({x:-581.6,y:-376.8,alpha:0.063},0).wait(1).to({x:-604.9,y:-385.5,alpha:0.02},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_12A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-104.7,y:-57.2,alpha:0.957},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-131.4,y:-75.8,alpha:0.915},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-158,y:-94.7,alpha:0.872},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-184.4,y:-113.8,alpha:0.83},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-210.6,y:-133.4,alpha:0.787},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-236.3,y:-153.5,alpha:0.744},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-261.4,y:-174.3,alpha:0.702},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-285.5,y:-196.3,alpha:0.659},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-307.6,y:-220.2,alpha:0.617},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-324.1,y:-248.2,alpha:0.574},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-316.7,y:-278,alpha:0.531},0).wait(1).to({x:-340.2,y:-278.5,alpha:0.489},0).wait(1).to({x:-366,y:-274.5,alpha:0.446},0).wait(1).to({x:-388.1,y:-262.5,alpha:0.403},0).wait(1).to({x:-405.5,y:-260.8,alpha:0.361},0).wait(1).to({x:-433.8,y:-264.7,alpha:0.318},0).wait(1).to({x:-459,y:-267.1,alpha:0.276},0).wait(1).to({x:-484.1,y:-268.4,alpha:0.233},0).wait(1).to({x:-509.1,alpha:0.19},0).wait(1).to({x:-534.1,y:-267,alpha:0.148},0).wait(1).to({x:-558.9,y:-264,alpha:0.105},0).wait(1).to({x:-583.3,y:-258.9,alpha:0.063},0).wait(1).to({x:-607.1,y:-251.4,alpha:0.02},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_11C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-106.4,y:-49.3,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-134.4,y:-61.4,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-161.6,y:-75.2,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-187.8,y:-90.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-212.4,y:-108.9,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-235,y:-129.3,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-254.9,y:-152.4,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-271.1,y:-178.3,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-282.5,y:-206.5,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-288.2,y:-236.5,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-286.9,y:-266.9,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-272.8,y:-267.5,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-258.6,y:-267.8,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-244.5,y:-267.9,alpha:0.558},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-230.4,y:-267.5,alpha:0.527},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-216.4,y:-266.4,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-202.6,y:-263.5,alpha:0.464},0).wait(1).to({x:-192.3,y:-263.9,alpha:0.432},0).wait(1).to({x:-181.9,y:-264.3,alpha:0.401},0).wait(1).to({x:-171.6,y:-264.6,alpha:0.369},0).wait(1).to({x:-161.2,y:-264.8,alpha:0.338},0).wait(1).to({x:-150.9,y:-265.1,alpha:0.306},0).wait(1).to({x:-140.6,y:-265.3,alpha:0.275},0).wait(1).to({x:-130.2,y:-265.5,alpha:0.243},0).wait(1).to({x:-119.9,y:-265.6,alpha:0.212},0).wait(1).to({x:-109.5,y:-265.8,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_11B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-107.3,y:-52.7,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-136.3,y:-67.6,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-164.7,y:-83.4,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-192.5,y:-100.5,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-219.4,y:-118.9,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-244.9,y:-139.2,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-268.5,y:-161.7,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-288.8,y:-187.2,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-302.3,y:-216.7,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-299.9,y:-248.5,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-275.8,y:-269.4,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-269,y:-269.7,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-262.2,y:-269.6,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-255.4,y:-269.1,alpha:0.558},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-248.7,y:-268.1,alpha:0.527},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-242.1,y:-266.6,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-235.7,y:-264.4,alpha:0.464},0).wait(1).to({x:-228.6,y:-264.6,alpha:0.432},0).wait(1).to({x:-221.5,y:-264.7,alpha:0.401},0).wait(1).to({x:-214.4,y:-264.6,alpha:0.369},0).wait(1).to({x:-207.3,y:-264.5,alpha:0.338},0).wait(1).to({x:-200.2,y:-264.3,alpha:0.306},0).wait(1).to({x:-193.2,y:-264.1,alpha:0.275},0).wait(1).to({x:-186.1,y:-263.9,alpha:0.243},0).wait(1).to({x:-179,alpha:0.212},0).wait(1).to({x:-171.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_11A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-107.3,y:-52.7,alpha:0.968},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-136.3,y:-67.6,alpha:0.937},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-164.7,y:-83.4,alpha:0.905},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-192.5,y:-100.5,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-219.4,y:-118.9,alpha:0.842},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-244.9,y:-139.2,alpha:0.811},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-268.5,y:-161.7,alpha:0.779},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-288.8,y:-187.2,alpha:0.748},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-302.3,y:-216.7,alpha:0.716},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-299.9,y:-248.5,alpha:0.685},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-275.8,y:-269.4,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-269,y:-269.7,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-262.2,y:-269.6,alpha:0.59},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-255.4,y:-269.1,alpha:0.558},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-248.7,y:-268.1,alpha:0.527},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-242.1,y:-266.6,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-235.7,y:-264.4,alpha:0.464},0).wait(1).to({x:-228.6,y:-264.6,alpha:0.432},0).wait(1).to({x:-221.5,y:-264.7,alpha:0.401},0).wait(1).to({x:-214.4,y:-264.6,alpha:0.369},0).wait(1).to({x:-207.3,y:-264.5,alpha:0.338},0).wait(1).to({x:-200.2,y:-264.3,alpha:0.306},0).wait(1).to({x:-193.2,y:-264.1,alpha:0.275},0).wait(1).to({x:-186.1,y:-263.9,alpha:0.243},0).wait(1).to({x:-179,alpha:0.212},0).wait(1).to({x:-171.9,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_10C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-104.8,y:-48.8,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-131.3,y:-60.4,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-156.8,y:-73.8,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-181.1,y:-89.4,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-203.4,y:-107.6,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-222.9,y:-128.9,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-238,y:-153.4,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-247.3,y:-180.7,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-249.7,y:-209.4,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-245.2,y:-237.8,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-234.4,y:-264.5,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-226.4,y:-264.4,alpha:0.531},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-218.5,y:-264.2,alpha:0.492},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-210.5,y:-263.9,alpha:0.453},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-202.6,y:-263.5,alpha:0.414},0).wait(1).to({x:-192.2,y:-262.9,alpha:0.375},0).wait(1).to({x:-181.9,y:-262,alpha:0.336},0).wait(1).to({x:-171.6,y:-260.1,alpha:0.297},0).wait(1).to({x:-161.8,y:-256.7,alpha:0.258},0).wait(1).to({x:-152.8,y:-251.6,alpha:0.219},0).wait(1).to({x:-145,y:-244.7,alpha:0.18},0).wait(7)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_10B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-92.1,y:-59,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-106.4,y:-79.3,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-120.7,y:-99.5,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-135,y:-119.8,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-149.3,y:-140,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-163.6,y:-160.3,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-177.9,y:-180.5,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-192.2,y:-200.8,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-206.5,y:-221.1,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-220.8,y:-241.3,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-235.2,y:-261.6,alpha:0.653},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-239,y:-262,alpha:0.622},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-242.8,y:-262.5,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-246.6,y:-262.9,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-250.5,y:-263.3,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-254.3,y:-263.7,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-258.1,y:-264.2,alpha:0.464},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-262.7,y:-262.4,alpha:0.432},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-267.3,y:-260.6,alpha:0.401},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-271.8,y:-258.8,alpha:0.369},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-276.4,y:-257,alpha:0.338},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-281,y:-255.3,alpha:0.306},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-285.6,y:-253.5,alpha:0.275},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-290.2,y:-251.7,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-294.8,y:-249.9,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-299.4,y:-248.2,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_10A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-105.5,y:-52,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-132.7,y:-66.3,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-159.2,y:-81.8,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-184.8,y:-98.7,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-209.3,y:-117.4,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-231.9,y:-138.1,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-251.7,y:-161.6,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-266.7,y:-188.3,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-272.6,y:-218.2,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-262,y:-246.4,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-235.5,y:-260.8,alpha:0.653},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-228.7,y:-261.1,alpha:0.622},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-221.9,y:-261.3,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-215.1,y:-261.5,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-208.3,y:-261.6,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-201.5,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-194.7,y:-261.5,alpha:0.464},0).wait(1).to({x:-187.6,y:-261.4,alpha:0.432},0).wait(1).to({x:-180.5,y:-261.2,alpha:0.401},0).wait(1).to({x:-173.5,y:-261.1,alpha:0.369},0).wait(1).to({x:-166.4,y:-261,alpha:0.338},0).wait(1).to({x:-159.3,alpha:0.306},0).wait(1).to({x:-152.2,y:-260.9,alpha:0.275},0).wait(1).to({x:-145.1,alpha:0.243},0).wait(1).to({x:-138,alpha:0.212},0).wait(1).to({x:-131,y:-261,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_9C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-102.8,y:-51.5,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-127.1,y:-65.4,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-150.7,y:-80.6,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-173.1,y:-97.4,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-193.7,y:-116.4,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-211.6,y:-138,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-224.8,y:-162.6,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-230.6,y:-190,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-227,y:-217.6,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-214.6,y:-242.7,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-196,y:-263.5,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-188,y:-263.4,alpha:0.531},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-180,y:-263.2,alpha:0.492},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-172.1,y:-262.9,alpha:0.453},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-164.2,y:-262.5,alpha:0.414},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-153.8,alpha:0.375},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-143.4,y:-262.9,alpha:0.336},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-133,y:-263.2,alpha:0.297},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-122.6,y:-263.4,alpha:0.258},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-112.2,alpha:0.219},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-101.8,y:-263.1,alpha:0.18},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-91.4,y:-262.4},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-81.1,y:-261.1},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-70.9,y:-259},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-61,y:-255.7},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-52.1,y:-250.4},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-46.2,y:-242},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_9B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-88.1,y:-59.3,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-98.5,y:-79.8,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-108.8,y:-100.3,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-119.2,y:-120.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-129.5,y:-141.4,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-139.8,y:-161.9,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-150.2,y:-182.5,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-160.5,y:-203,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-170.9,y:-223.5,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-181.2,y:-244.1,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-191.6,y:-264.6,alpha:0.653},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-197.3,alpha:0.622},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-203,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-208.7,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-214.5,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-220.2,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-225.9,alpha:0.464},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-229,y:-263.5,alpha:0.432},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-232.1,y:-262.3,alpha:0.401},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-235.1,y:-261.2,alpha:0.369},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-238.2,y:-260,alpha:0.338},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-241.3,y:-258.9,alpha:0.306},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-244.4,y:-257.7,alpha:0.275},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-247.4,y:-256.6,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-250.5,y:-255.4,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-253.6,y:-254.3,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_9A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-102.3,y:-53.4,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-126.3,y:-69.1,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-149.4,y:-85.8,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-171.5,y:-104,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-192.1,y:-123.9,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-210.5,y:-145.8,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-225.2,y:-170.3,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-233.7,y:-197.5,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-231.5,y:-225.7,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-215.2,y:-248.8,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-189.3,y:-260.2,alpha:0.653},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-175.5,y:-260,alpha:0.622},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-161.6,y:-259.9,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-147.8,y:-259.7,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-133.9,y:-259.5,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-120.1,y:-259.3,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-106.2,y:-259.1,alpha:0.464},0).wait(1).to({x:-95.6,y:-259,alpha:0.432},0).wait(1).to({x:-85,y:-259.1,alpha:0.401},0).wait(1).to({x:-74.4,y:-259.2,alpha:0.369},0).wait(1).to({x:-63.9,y:-259.4,alpha:0.338},0).wait(1).to({x:-53.3,y:-259.5,alpha:0.306},0).wait(1).to({x:-42.7,y:-259.7,alpha:0.275},0).wait(1).to({x:-32.1,y:-259.9,alpha:0.243},0).wait(1).to({x:-21.5,y:-260.1,alpha:0.212},0).wait(1).to({x:-10.9,y:-260.2,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_8C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-103,y:-51.7,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-127.5,y:-66,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-151,y:-81.9,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-172.9,y:-100,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-192.1,y:-120.8,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-206.8,y:-145.1,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-213.5,y:-172.5,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-209.7,y:-200.5,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-196.9,y:-225.7,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-178.3,y:-247.1,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-156.1,y:-264.6,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-136.9,y:-264.9,alpha:0.531},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-117.8,y:-265,alpha:0.492},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-98.7,alpha:0.453},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-79.6,y:-264.6,alpha:0.414},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-68.6,y:-264.3,alpha:0.375},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-57.6,y:-264.1,alpha:0.336},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-46.6,alpha:0.297},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-35.7,alpha:0.258},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-24.7,alpha:0.219},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-13.7,alpha:0.18},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-2.7},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:8.1,y:-264},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:19.1},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:30.1,y:-263.9},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:41.1,y:-263.7},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:52.1,y:-263.5},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_8B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-84.3,y:-59.3,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-90.8,y:-79.8,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-97.3,y:-100.3,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-103.8,y:-120.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-110.3,y:-141.4,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-116.8,y:-161.9,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-123.3,y:-182.5,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-129.8,y:-203,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-136.3,y:-223.6,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-142.8,y:-244.1,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-149.4,y:-264.7,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-151,y:-261.5,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-152.7,y:-258.4,alpha:0.59},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-154.4,y:-255.2,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-156.1,y:-252.1,alpha:0.527},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-157.7,y:-248.9,alpha:0.495},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-159.4,y:-245.8,alpha:0.464},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-161,y:-243.1,alpha:0.432},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-162.6,y:-240.5,alpha:0.401},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-164.2,y:-237.8,alpha:0.369},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-165.8,y:-235.1,alpha:0.338},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-167.4,y:-232.5,alpha:0.306},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-169,y:-229.8,alpha:0.275},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-170.6,y:-227.1,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-172.2,y:-224.5,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-173.8,y:-221.8,alpha:0.18},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_8A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-98.8,y:-55.7,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-119,y:-73.3,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-138.5,y:-92,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-156.8,y:-111.8,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-173.4,y:-132.9,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-187.7,y:-155.8,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-198,y:-180.7,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-201.6,y:-207.3,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-194.3,y:-233,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-175.7,y:-252,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-150.6,y:-261.3,alpha:0.653},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-143.2,y:-261.7,alpha:0.622},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-135.8,y:-262,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-128.4,y:-262.3,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-121,y:-262.4,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-113.6,y:-262.5,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-106.2,y:-262.4,alpha:0.464},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-96.6,y:-262.5,alpha:0.432},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-86.9,y:-262.8,alpha:0.401},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-77.3,y:-262.9,alpha:0.369},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-67.7,y:-262.7,alpha:0.338},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-58,y:-262.2,alpha:0.306},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-48.5,y:-261,alpha:0.275},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-39.1,y:-258.8,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-30.3,y:-255,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-23.1,y:-248.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_7C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27)).call(kickEnd);

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-83.7,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-56.3,y:-53.1,alpha:0.96},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-30.2,y:-69.6,alpha:0.92},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-6.4,y:-89.2,alpha:0.88},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:12.7,y:-113.1,alpha:0.84},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:22.1,y:-142.2,alpha:0.8},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:16.3,y:-172.2,alpha:0.76},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-0.8,y:-197.6,alpha:0.72},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-23.5,y:-218.5,alpha:0.68},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-48.9,y:-236,alpha:0.64},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-75.9,y:-250.9,alpha:0.6},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-104.1,y:-263.7,alpha:0.56},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-126.4,y:-263.8,alpha:0.52},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-148.7,y:-264,alpha:0.48},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-171,y:-264.1,alpha:0.44},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-193.4,y:-264.2,alpha:0.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-215.7,y:-264.3,alpha:0.36},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-238.1,alpha:0.32},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-260.4,y:-263.9,alpha:0.28},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-268,y:-261.6,alpha:0.24},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-275.5,y:-259.1,alpha:0.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-283,y:-256.4,alpha:0.16},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-290.3,y:-253.6,alpha:0.12},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-297.8,y:-250.7,alpha:0.08},0).wait(5)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.9,-82,86.3,86.3);


(lib.ball_7B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-79.9,y:-65.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-82,y:-91.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-84.2,y:-117.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-86.3,y:-144.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-88.5,y:-170.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:-90.7,y:-196.8},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-93,y:-223.2},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-95.4,y:-249.5},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-98.4,y:-275},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-99,y:-271.5},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-99.7,y:-268},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-100.5,y:-264.4},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-101.1,y:-260.9},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-101.7,y:-257.4},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-102.1,y:-253.8},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-102.4,y:-250.2},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-104.1,y:-253.4},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-104.9,y:-249.8},0).wait(1).to({scaleX:0.14,scaleY:0.14,y:-246},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-104.8,y:-242.3},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-104.6,y:-238.5},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-104.3,y:-234.6},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-104,y:-230.9},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-103.6,y:-227.1},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-103.2,y:-223.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-102.7,y:-219.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-102.2,y:-215.8},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_7A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-93.8,y:-56.8,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-108.4,y:-76,alpha:0.937},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-121.4,y:-96.3,alpha:0.905},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-132.4,y:-117.7,alpha:0.874},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-141.1,y:-140.2,alpha:0.842},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-146.7,y:-163.6,alpha:0.811},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-148.7,y:-187.6,alpha:0.779},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-146,y:-211.5,alpha:0.748},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:-137.3,y:-233.9,alpha:0.716},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-121.5,y:-251.9,alpha:0.685},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-99.6,y:-261.3,alpha:0.653},0).wait(1).to({x:-84,y:-262.5,alpha:0.622},0).wait(1).to({x:-68.5,y:-263.7,alpha:0.59},0).wait(1).to({x:-53.1,y:-264.8,alpha:0.558},0).wait(1).to({x:-37.5,y:-265.7,alpha:0.527},0).wait(1).to({x:-22,y:-266.5,alpha:0.495},0).wait(1).to({x:-6.5,y:-266.9,alpha:0.464},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:3.5,y:-266.5,alpha:0.432},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:13.7,y:-265.8,alpha:0.401},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:23.8,y:-264.8,alpha:0.369},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:34,y:-263.6,alpha:0.338},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:44,y:-262.1,alpha:0.306},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:54.1,y:-260.3,alpha:0.275},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:64,y:-258,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:73.8,y:-255,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:83.1,y:-251,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_6C = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.45,scaleY:0.45,x:-103,y:-51.7,alpha:0.961},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-127.5,y:-66,alpha:0.922},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-151,y:-81.9,alpha:0.883},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-172.9,y:-100,alpha:0.844},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-192.1,y:-120.8,alpha:0.805},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-206.8,y:-145.1,alpha:0.766},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-213.5,y:-172.5,alpha:0.727},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:-209.7,y:-200.5,alpha:0.688},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:-196.9,y:-225.7,alpha:0.649},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-178.3,y:-247.1,alpha:0.61},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-156.1,y:-264.6,alpha:0.57},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-136.9,y:-264.9,alpha:0.531},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-117.8,y:-265,alpha:0.492},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-98.7,alpha:0.453},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-79.6,y:-264.6,alpha:0.414},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-68.6,y:-264.3,alpha:0.375},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-57.6,y:-264.1,alpha:0.336},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-46.6,alpha:0.297},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-35.7,alpha:0.258},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-24.7,alpha:0.219},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-13.7,alpha:0.18},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-2.7},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:8.1,y:-264},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:19.1},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:30.1,y:-263.9},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:41.1,y:-263.7},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:52.1,y:-263.5},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_6B = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-84.3,y:-59.3,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-90.8,y:-79.8,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-97.3,y:-100.3,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-103.8,y:-120.9,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-110.3,y:-141.4,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-116.8,y:-161.9,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-123.3,y:-182.5,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-129.8,y:-203,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-136.3,y:-223.6,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-142.8,y:-244.1,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-149.4,y:-264.7,alpha:0.653},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-151,y:-261.5,alpha:0.622},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-152.7,y:-258.4,alpha:0.59},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-154.4,y:-255.2,alpha:0.558},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-156.1,y:-252.1,alpha:0.527},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-157.7,y:-248.9,alpha:0.495},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-159.4,y:-245.8,alpha:0.464},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-161,y:-243.1,alpha:0.432},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-162.6,y:-240.5,alpha:0.401},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-164.2,y:-237.8,alpha:0.369},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-165.8,y:-235.1,alpha:0.338},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-167.4,y:-232.5,alpha:0.306},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-169,y:-229.8,alpha:0.275},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-170.6,y:-227.1,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-172.2,y:-224.5,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-173.8,y:-221.8,alpha:0.18},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);


(lib.ball_6A = function(mode,startPosition,loop) {	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.interna = new lib.bola();
	this.interna.setTransform(-77.9,-38.9,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.interna).wait(1).to({scaleX:0.44,scaleY:0.44,x:-98.8,y:-55.7,alpha:0.968},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-119,y:-73.3,alpha:0.937},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-138.5,y:-92,alpha:0.905},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-156.8,y:-111.8,alpha:0.874},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-173.4,y:-132.9,alpha:0.842},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-187.7,y:-155.8,alpha:0.811},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-198,y:-180.7,alpha:0.779},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:-201.6,y:-207.3,alpha:0.748},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:-194.3,y:-233,alpha:0.716},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:-175.7,y:-252,alpha:0.685},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-150.6,y:-261.3,alpha:0.653},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-143.2,y:-261.7,alpha:0.622},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-135.8,y:-262,alpha:0.59},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-128.4,y:-262.3,alpha:0.558},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-121,y:-262.4,alpha:0.527},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-113.6,y:-262.5,alpha:0.495},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-106.2,y:-262.4,alpha:0.464},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:-96.6,y:-262.5,alpha:0.432},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:-86.9,y:-262.8,alpha:0.401},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-77.3,y:-262.9,alpha:0.369},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:-67.7,y:-262.7,alpha:0.338},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-58,y:-262.2,alpha:0.306},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-48.5,y:-261,alpha:0.275},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-39.1,y:-258.8,alpha:0.243},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-30.3,y:-255,alpha:0.212},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-23.1,y:-248.7,alpha:0.18},0).wait(2)).call(kickEnd);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.1,-82,86.3,86.3);




(lib.mc_goolkeeper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":0,state1:1,state2:2,state3:3,state4:4,astate5:5,state6:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// MC
	this.standBy = new lib.loop_arquerofdss();
	this.standBy.setTransform(-7.4,0);

	this.upLeft = new lib.arquero1fdsf();
	this.upLeft.setTransform(-7.4,4);

	this.upCenter = new lib.arquero2fdsfds();
	this.upCenter.setTransform(-7.4,4);

	this.upRight = new lib.arquero3fdsfds();
	this.upRight.setTransform(-1.9,0);

	this.downLeft = new lib.arquero4gfdgf();
	this.downLeft.setTransform(-2.8,3.6,0.986,0.986);

	this.downCenter = new lib.arquero5gfdg();
	this.downCenter.setTransform(-13.9,0);

	this.downRight = new lib.Arquero6gfdgfd();
	this.downRight.setTransform(18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.standBy}]}).to({state:[{t:this.upLeft}]},1).to({state:[{t:this.upCenter}]},1).to({state:[{t:this.upRight}]},1).to({state:[{t:this.downLeft}]},1).to({state:[{t:this.downCenter}]},1).to({state:[{t:this.downRight}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0,620,248);


(lib._Ballones_balls = function() {
	this.initialize();

	// ball_7C
	this.ball_7C = new lib.ball_7C();
	this.ball_7C.setTransform(5.9,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_7B
	this.ball_7B = new lib.ball_7B();
	this.ball_7B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_7A
	this.ball_7A = new lib.ball_7A();
	this.ball_7A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_20C
	this.ball_20C = new lib.ball_20C();
	this.ball_20C.setTransform(-37.2,0.1,1,1,0,0,0,-80,-38.9);

	// ball_20B
	this.ball_20B = new lib.ball_20B();
	this.ball_20B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_20A
	this.ball_20A = new lib.ball_20A();
	this.ball_20A.setTransform(2.2,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_33C
	this.ball_33C = new lib.ball_33C();
	this.ball_33C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_33B
	this.ball_33B = new lib.ball_33B();
	this.ball_33B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_33A
	this.ball_33A = new lib.ball_33A();
	this.ball_33A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_46A
	this.ball_46A = new lib.ball_46A();
	this.ball_46A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_46B
	this.ball_46B = new lib.ball_46B();
	this.ball_46B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_46C
	this.ball_46C = new lib.ball_46C();
	this.ball_46C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_59C
	this.ball_59C = new lib.ball_59C();
	this.ball_59C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_59B
	this.ball_59B = new lib.ball_59B();
	this.ball_59B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_59A
	this.ball_59A = new lib.ball_59A();
	this.ball_59A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_72C
	this.ball_72C = new lib.ball_72C();
	this.ball_72C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_72B
	this.ball_72B = new lib.ball_72B();
	this.ball_72B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_72A
	this.ball_72A = new lib.ball_72A();
	this.ball_72A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_8C
	this.ball_8C = new lib.ball_8C();
	this.ball_8C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_8B
	this.ball_8B = new lib.ball_8B();
	this.ball_8B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_8A
	this.ball_8A = new lib.ball_8A();
	this.ball_8A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_9C
	this.ball_9C = new lib.ball_9C();
	this.ball_9C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_9B
	this.ball_9B = new lib.ball_9B();
	this.ball_9B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_9A
	this.ball_9A = new lib.ball_9A();
	this.ball_9A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_10C
	this.ball_10C = new lib.ball_10C();
	this.ball_10C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_10B
	this.ball_10B = new lib.ball_10B();
	this.ball_10B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_10A
	this.ball_10A = new lib.ball_10A();
	this.ball_10A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_11C
	this.ball_11C = new lib.ball_11C();
	this.ball_11C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_11B
	this.ball_11B = new lib.ball_11B();
	this.ball_11B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_11A
	this.ball_11A = new lib.ball_11A();
	this.ball_11A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_12C
	this.ball_12C = new lib.ball_12C();
	this.ball_12C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_12B
	this.ball_12B = new lib.ball_12B();
	this.ball_12B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_12A
	this.ball_12A = new lib.ball_12A();
	this.ball_12A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_13C
	this.ball_13C = new lib.ball_13C();
	this.ball_13C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_13B
	this.ball_13B = new lib.ball_13B();
	this.ball_13B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_13A
	this.ball_13A = new lib.ball_13A();
	this.ball_13A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_21C
	this.ball_21C = new lib.ball_21C();
	this.ball_21C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_21B
	this.ball_21B = new lib.ball_21B();
	this.ball_21B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_21A
	this.ball_21A = new lib.ball_21A();
	this.ball_21A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_22C
	this.ball_22C = new lib.ball_22C();
	this.ball_22C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_22B
	this.ball_22B = new lib.ball_22B();
	this.ball_22B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_22A
	this.ball_22A = new lib.ball_22A();
	this.ball_22A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_23C
	this.ball_23C = new lib.ball_23C();
	this.ball_23C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_23B
	this.ball_23B = new lib.ball_23B();
	this.ball_23B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_23A
	this.ball_23A = new lib.ball_23A();
	this.ball_23A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_24C
	this.ball_24C = new lib.ball_24C();
	this.ball_24C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_24B
	this.ball_24B = new lib.ball_24B();
	this.ball_24B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_24A
	this.ball_24A = new lib.ball_24A();
	this.ball_24A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_25C
	this.ball_25C = new lib.ball_25C();
	this.ball_25C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_25B
	this.ball_25B = new lib.ball_25B();
	this.ball_25B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_25A
	this.ball_25A = new lib.ball_25A();
	this.ball_25A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_26C
	this.ball_26C = new lib.ball_26C();
	this.ball_26C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_26B
	this.ball_26B = new lib.ball_26B();
	this.ball_26B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_26A
	this.ball_26A = new lib.ball_26A();
	this.ball_26A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_34C
	this.ball_34C = new lib.ball_34C();
	this.ball_34C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_34B
	this.ball_34B = new lib.ball_34B();
	this.ball_34B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_34A
	this.ball_34A = new lib.ball_34A();
	this.ball_34A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_35C
	this.ball_35C = new lib.ball_35C();
	this.ball_35C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_35B
	this.ball_35B = new lib.ball_35B();
	this.ball_35B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_35A
	this.ball_35A = new lib.ball_35A();
	this.ball_35A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_36C
	this.ball_36C = new lib.ball_36C();
	this.ball_36C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_36B
	this.ball_36B = new lib.ball_36B();
	this.ball_36B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_36A
	this.ball_36A = new lib.ball_36A();
	this.ball_36A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_37C
	this.ball_37C = new lib.ball_37C();
	this.ball_37C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_37B
	this.ball_37B = new lib.ball_37B();
	this.ball_37B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_37A
	this.ball_37A = new lib.ball_37A();
	this.ball_37A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_38C
	this.ball_38C = new lib.ball_38C();
	this.ball_38C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_38B
	this.ball_38B = new lib.ball_38B();
	this.ball_38B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_38A
	this.ball_38A = new lib.ball_38A();
	this.ball_38A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_39C
	this.ball_39C = new lib.ball_39C();
	this.ball_39C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_39B
	this.ball_39B = new lib.ball_39B();
	this.ball_39B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_39A
	this.ball_39A = new lib.ball_39A();
	this.ball_39A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_47C
	this.ball_47C = new lib.ball_47C();
	this.ball_47C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_47B
	this.ball_47B = new lib.ball_47B();
	this.ball_47B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_47A
	this.ball_47A = new lib.ball_47A();
	this.ball_47A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_48C
	this.ball_48C = new lib.ball_48C();
	this.ball_48C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_48B
	this.ball_48B = new lib.ball_48B();
	this.ball_48B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_48A
	this.ball_48A = new lib.ball_48A();
	this.ball_48A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_49C
	this.ball_49C = new lib.ball_49C();
	this.ball_49C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_49B
	this.ball_49B = new lib.ball_49B();
	this.ball_49B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_49A
	this.ball_49A = new lib.ball_49A();
	this.ball_49A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_50C
	this.ball_50C = new lib.ball_50C();
	this.ball_50C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_50B
	this.ball_50B = new lib.ball_50B();
	this.ball_50B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_50A
	this.ball_50A = new lib.ball_50A();
	this.ball_50A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_51C
	this.ball_51C = new lib.ball_51C();
	this.ball_51C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_51B
	this.ball_51B = new lib.ball_51B();
	this.ball_51B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_51A
	this.ball_51A = new lib.ball_51A();
	this.ball_51A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_52C
	this.ball_52C = new lib.ball_52C();
	this.ball_52C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_52B
	this.ball_52B = new lib.ball_52B();
	this.ball_52B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_52A
	this.ball_52A = new lib.ball_52A();
	this.ball_52A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_60C
	this.ball_60C = new lib.ball_60C();
	this.ball_60C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_60B
	this.ball_60B = new lib.ball_60B();
	this.ball_60B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_60A
	this.ball_60A = new lib.ball_60A();
	this.ball_60A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_61C
	this.ball_61C = new lib.ball_61C();
	this.ball_61C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_61B
	this.ball_61B = new lib.ball_61B();
	this.ball_61B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_61A
	this.ball_61A = new lib.ball_61A();
	this.ball_61A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_62C
	this.ball_62C = new lib.ball_62C();
	this.ball_62C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_62B
	this.ball_62B = new lib.ball_62B();
	this.ball_62B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_62A
	this.ball_62A = new lib.ball_62A();
	this.ball_62A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_63C
	this.ball_63C = new lib.ball_63C();
	this.ball_63C.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_63B
	this.ball_63B = new lib.ball_63B();
	this.ball_63B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_63A
	this.ball_63A = new lib.ball_63A();
	this.ball_63A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_64C
	this.ball_64C = new lib.ball_64C();
	this.ball_64C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_64B
	this.ball_64B = new lib.ball_64B();
	this.ball_64B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_64A
	this.ball_64A = new lib.ball_64A();
	this.ball_64A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_65C
	this.ball_65C = new lib.ball_65C();
	this.ball_65C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_65B
	this.ball_65B = new lib.ball_65B();
	this.ball_65B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_65A
	this.ball_65A = new lib.ball_65A();
	this.ball_65A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_73C
	this.ball_73C = new lib.ball_73C();
	this.ball_73C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_73B
	this.ball_73B = new lib.ball_73B();
	this.ball_73B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_73A
	this.ball_73A = new lib.ball_73A();
	this.ball_73A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_74C
	this.ball_74C = new lib.ball_74C();
	this.ball_74C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_74B
	this.ball_74B = new lib.ball_74B();
	this.ball_74B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_74A
	this.ball_74A = new lib.ball_74A();
	this.ball_74A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_75C
	this.ball_75C = new lib.ball_75C();
	this.ball_75C.setTransform(-11.8,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_75B
	this.ball_75B = new lib.ball_75B();
	this.ball_75B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_75A
	this.ball_75A = new lib.ball_75A();
	this.ball_75A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_76C
	this.ball_76C = new lib.ball_76C();
	this.ball_76C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_76B
	this.ball_76B = new lib.ball_76B();
	this.ball_76B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_76A
	this.ball_76A = new lib.ball_76A();
	this.ball_76A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_77C
	this.ball_77C = new lib.ball_77C();
	this.ball_77C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_77B
	this.ball_77B = new lib.ball_77B();
	this.ball_77B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_77A
	this.ball_77A = new lib.ball_77A();
	this.ball_77A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_78C
	this.ball_78C = new lib.ball_78C();
	this.ball_78C.setTransform(0.1,0.1,1,1,0,0,0,-77.8,-34.4);

	// ball_78B
	this.ball_78B = new lib.ball_78B();
	this.ball_78B.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_78A
	this.ball_78A = new lib.ball_78A();
	this.ball_78A.setTransform(0.1,0.1,1,1,0,0,0,-77.9,-38.9);

	// ball_53A
	this.ball_53A = new lib.ball_53A();
	this.ball_53A.setTransform(0,0.1,1,1,0,0,180,-77.8,-34.4);

	// ball_53B
	this.ball_53B = new lib.ball_53B();
	this.ball_53B.setTransform(0,0.1,1,1,0,0,180,-77.9,-38.9);

	// ball_53C
	this.ball_53C = new lib.ball_53C();
	this.ball_53C.setTransform(0,0.1,1,1,0,0,180,-77.9,-38.9);

	// ball_6C
	this.ball_6C = new lib.ball_6C();
	this.ball_6C.setTransform(-4.4,2.8,1,1,0,0,0,-77.9,-38.9);

	// ball_6B
	this.ball_6B = new lib.ball_6B();
	this.ball_6B.setTransform(-4.4,2.8,1,1,0,0,0,-77.9,-38.9);

	// ball_6A
	this.ball_6A = new lib.ball_6A();
	this.ball_6A.setTransform(-4.4,2.8,1,1,0,0,0,-77.9,-38.9);

	this.addChild(this.ball_6A,this.ball_6B,this.ball_6C,this.ball_53C,this.ball_53B,this.ball_53A,this.ball_78A,this.ball_78B,this.ball_78C,this.ball_77A,this.ball_77B,this.ball_77C,this.ball_76A,this.ball_76B,this.ball_76C,this.ball_75A,this.ball_75B,this.ball_75C,this.ball_74A,this.ball_74B,this.ball_74C,this.ball_73A,this.ball_73B,this.ball_73C,this.ball_65A,this.ball_65B,this.ball_65C,this.ball_64A,this.ball_64B,this.ball_64C,this.ball_63A,this.ball_63B,this.ball_63C,this.ball_62A,this.ball_62B,this.ball_62C,this.ball_61A,this.ball_61B,this.ball_61C,this.ball_60A,this.ball_60B,this.ball_60C,this.ball_52A,this.ball_52B,this.ball_52C,this.ball_51A,this.ball_51B,this.ball_51C,this.ball_50A,this.ball_50B,this.ball_50C,this.ball_49A,this.ball_49B,this.ball_49C,this.ball_48A,this.ball_48B,this.ball_48C,this.ball_47A,this.ball_47B,this.ball_47C,this.ball_39A,this.ball_39B,this.ball_39C,this.ball_38A,this.ball_38B,this.ball_38C,this.ball_37A,this.ball_37B,this.ball_37C,this.ball_36A,this.ball_36B,this.ball_36C,this.ball_35A,this.ball_35B,this.ball_35C,this.ball_34A,this.ball_34B,this.ball_34C,this.ball_26A,this.ball_26B,this.ball_26C,this.ball_25A,this.ball_25B,this.ball_25C,this.ball_24A,this.ball_24B,this.ball_24C,this.ball_23A,this.ball_23B,this.ball_23C,this.ball_22A,this.ball_22B,this.ball_22C,this.ball_21A,this.ball_21B,this.ball_21C,this.ball_13A,this.ball_13B,this.ball_13C,this.ball_12A,this.ball_12B,this.ball_12C,this.ball_11A,this.ball_11B,this.ball_11C,this.ball_10A,this.ball_10B,this.ball_10C,this.ball_9A,this.ball_9B,this.ball_9C,this.ball_8A,this.ball_8B,this.ball_8C,this.ball_72A,this.ball_72B,this.ball_72C,this.ball_59A,this.ball_59B,this.ball_59C,this.ball_46C,this.ball_46B,this.ball_46A,this.ball_33A,this.ball_33B,this.ball_33C,this.ball_20A,this.ball_20B,this.ball_20C,this.ball_7A,this.ball_7B,this.ball_7C);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.7,-43.1,90.9,89.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;