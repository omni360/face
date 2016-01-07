function namesp(){gpcas = {};
	gpcas.util = {};
	gpcas.geometry = {};
};namesp()
function equals(x1, x) {
	var p;
	for (p in x1) {
		if (typeof(x[p]) == 'undefined') {
			return false;
		}
	}
	for (p in x1) {
		if (x1[p]) {
			switch (typeof(x1[p])) {
				case 'object':
					if (!equals(x1[p], x[p])) {
						return false;
					}
					break;
				case 'function':
					if (typeof(x[p]) == 'undefined' ||
							(p != 'equals' && x1[p].toString() != x[p].toString()))
						return false;
					break;
				default:
					if (x1[p] != x[p]) {
						return false;
					}
			}
		} else {
			if (x[p])
				return false;
		}
	}
	for (p in x) {
		if (typeof(x1[p]) == 'undefined') {
			return false;
		}
	}
	return true;
}
Point = function (x, y) {
	this.x = x;
	this.y = y;
};
function arrHlpr(){
	gpcas.util.ArrayHelper = function () {
	};
	var static = gpcas.util.ArrayHelper;
	static.create2DArray = function (x, y) {
		var a = [];
		for (var i = 0; i < x; i++) {
			a[i] = [];
		}
		return a;
	};
	static.valueEqual = function (obj1, obj2) {
		if (obj1 == obj2) return true;
		if (equals(obj1, obj2)) return true;
		return false;
	}
	static.sortPointsClockwise = function (vertices) {
		var isArrayList = false;
		if (vertices instanceof ArrayList) {
			vertices = vertices.toArray();
			isArrayList = true;
		}
		//point
		var maxTop = null;
		var maxBottom = null;
		var maxLeft = null;
		var maxRight = null;
		var maxLeftIndex;
		var newVertices = vertices;
		for (var i = 0; i < vertices.length; i++) {
			var vertex = vertices[i];
			if ((maxTop == null) || (maxTop.y > vertex.y) || ((maxTop.y == vertex.y) && (vertex.x < maxTop.x))) {
				maxTop = vertex;
			}
			if ((maxBottom == null) || (maxBottom.y < vertex.y) || ((maxBottom.y == vertex.y) && (vertex.x > maxBottom.x))) {
				maxBottom = vertex;
			}
			if ((maxLeft == null) || (maxLeft.x > vertex.x) || ((maxLeft.x == vertex.x) && (vertex.y > maxLeft.y))) {
				maxLeft = vertex;
				maxLeftIndex = i;
			}
			if ((maxRight == null) || (maxRight.x < vertex.x) || ((maxRight.x == vertex.x) && (vertex.y < maxRight.y))) {
				maxRight = vertex;
			}
		}
		if (maxLeftIndex > 0) {
			newVertices = []
			var j = 0;
			for (var i = maxLeftIndex; i < vertices.length; i++) {
				newVertices[j++] = vertices[i];
			}
			for (var i = 0; i < maxLeftIndex; i++) {
				newVertices[j++] = vertices[i];
			}
			vertices = newVertices;
		}
		var reverse = false;
		for (var i = 0; i < vertices.length; i++) {
			var vertex = vertices[i];
			if (equals(vertex, maxBottom)) {
				reverse = true;
				break;
			} else if (equals(vertex, maxTop)) {
				break;
			}
		}
		if (reverse) {
			newVertices = []
			newVertices[0] = vertices[0];
			var j = 1;
			for (var i = vertices.length - 1; i > 0; i--) {
				newVertices[j++] = vertices[i];
			}
			vertices = newVertices;
		}
		return (isArrayList ? (new ArrayList(vertices)) : (vertices));
	}
	ArrayHelper = gpcas.util.ArrayHelper;
};arrHlpr()
function arrLs() {
	////////////////// CLASS ArrayList  /////////////////////////
	gpcas.util.ArrayList = function (arr) {
		this._array = [];
		if (arr != null) {
			this._array = arr;
		}
	};
	var p = gpcas.util.ArrayList.prototype;
	p.add = function (value) {
		this._array.push(value);
	};
	p.get = function (index) {
		return this._array[index];
	};
	p.size = function () {
		return this._array.length;
	};
	p.clear = function () {
		this._array = [];
	};
	p.equals = function (list) {
		if (this._array.length != list.size()) return false;
		for (var i = 0; i < this._array.length; i++) {
			var obj1 = this._array[i];
			var obj2 = list.get(i);
			if (!ArrayHelper.valueEqual(obj1, obj2)) {
				return false;
			}
		}
		return true;
	}
	p.hashCode = function () {
		return 0;
	};
	p.isEmpty = function () {
		return (this._array.length == 0);
	}
	p.toArray = function () {
		return this._array;
	}
	///////////////// END ArrayList ////////////////////////
};arrLs()
function clip() {
	gpcas.geometry.Clip = function () {
	};
	gpcas.geometry.Clip.DEBUG = false;
	gpcas.geometry.Clip.GPC_EPSILON = 2.2204460492503131e-016;
	gpcas.geometry.Clip.GPC_VERSION = "2.31";
	gpcas.geometry.Clip.LEFT = 0;
	gpcas.geometry.Clip.RIGHT = 1;
	gpcas.geometry.Clip.ABOVE = 0;
	gpcas.geometry.Clip.BELOW = 1;
	gpcas.geometry.Clip.CLIP = 0;
	gpcas.geometry.Clip.SUBJ = 1;
};clip()
var p = gpcas.geometry.Clip.prototype;
var static = gpcas.geometry.Clip;
function sttMets() {
	// ----------------------
// --- Static Methods ---
// ----------------------
	/**
	 * Return the intersection of <code>p1</code> and <code>p2</code> where the
	 * return type is of <code>polyClass</code>.  See the note in the class description
	 * for more on <ocde>polyClass</code>.
	 *
	 * @param p1        One of the polygons to performt he intersection with
	 * @param p2        One of the polygons to performt he intersection with
	 * @param polyClass The type of <code>Poly</code> to return
	 */
	static.intersection = function (p1, p2, polyClass) {
		if (polyClass == null || polyClass == undefined) {
			polyClass = "PolyDefault";
		}
		return Clip.clip(OperationType.GPC_INT, p1, p2, polyClass);
	};
	/**
	 * Return the union of <code>p1</code> and <code>p2</code> where the
	 * return type is of <code>polyClass</code>.  See the note in the class description
	 * for more on <ocde>polyClass</code>.
	 *
	 * @param p1        One of the polygons to performt he union with
	 * @param p2        One of the polygons to performt he union with
	 * @param polyClass The type of <code>Poly</code> to return
	 */
	static.union = function (p1, p2, polyClass) {
		if (polyClass == null || polyClass == undefined) {
			polyClass = "PolyDefault";
		}
		return Clip.clip(OperationType.GPC_UNION, p1, p2, polyClass);
	};
	/**
	 * Return the xor of <code>p1</code> and <code>p2</code> where the
	 * return type is of <code>polyClass</code>.  See the note in the class description
	 * for more on <ocde>polyClass</code>.
	 *
	 * @param p1        One of the polygons to performt he xor with
	 * @param p2        One of the polygons to performt he xor with
	 * @param polyClass The type of <code>Poly</code> to return
	 */
	static.xor = function (p1, p2, polyClass) {
		if (polyClass == null || polyClass == undefined) {
			polyClass = "PolyDefault";
		}
		return Clip.clip(OperationType.GPC_XOR, p1, p2, polyClass);
	};
	/**
	 * Return the difference of <code>p1</code> and <code>p2</code> where the
	 * return type is of <code>polyClass</code>.  See the note in the class description
	 * for more on <ocde>polyClass</code>.
	 *
	 * @param p1        Polygon from which second polygon will be substracted
	 * @param p2        Second polygon
	 * @param polyClass The type of <code>Poly</code> to return
	 */
	static.difference = function (p1, p2, polyClass) {
		if (polyClass == null || polyClass == undefined) {
			polyClass = "PolyDefault";
		}
		return Clip.clip(OperationType.GPC_DIFF, p2, p1, polyClass);
	}
	static.intersection = function (p1, p2) {
		return Clip.clip(OperationType.GPC_INT, p1, p2, "PolyDefault.class");
	}
	// -----------------------
// --- Private Methods ---
// -----------------------
	/**
	 * Create a new <code>Poly</code> type object using <code>polyClass</code>.
	 */
	static.createNewPoly = function (polyClass) {
		/* TODO :
		 try
		 {
		 return (Poly)polyClass.newInstance();
		 }
		 catch( var e:Exception)
		 {
		 throw new RuntimeException(e);
		 }*/
		if (polyClass == "PolySimple") {
			return new PolySimple();
		}
		if (polyClass == "PolyDefault") {
			return new PolyDefault();
		}
		if (polyClass == "PolyDefault.class") {
			return new PolyDefault();
		}
		return null;
	}
	/**
	 * <code>clip()</code> is the main method of the clipper algorithm.
	 * This is where the conversion from really begins.
	 */
	static.clip = function (op, subj, clip, polyClass) {
		var result = Clip.createNewPoly(polyClass);
		/* Test for trivial NULL result cases */
		if ((subj.isEmpty() && clip.isEmpty()) ||
				(subj.isEmpty() && ((op == OperationType.GPC_INT) || (op == OperationType.GPC_DIFF))) ||
				(clip.isEmpty() && (op == OperationType.GPC_INT))) {
			return result;
		}
		/* Identify potentialy contributing contours */
		if (((op == OperationType.GPC_INT) || (op == OperationType.GPC_DIFF)) && !subj.isEmpty() && !clip.isEmpty()) {
			Clip.minimax_test(subj, clip, op);
		}
		//console.log("SUBJ " + subj);
		//console.log("CLIP " + clip);
		/* Build LMT */
		var lmt_table = new LmtTable();
		var sbte = new ScanBeamTreeEntries();
		var s_heap = null;
		var c_heap = null;
		if (!subj.isEmpty()) {
			s_heap = Clip.build_lmt(lmt_table, sbte, subj, Clip.SUBJ, op);
		}
		if (Clip.DEBUG) {
			//console.log("");
			//console.log(" ------------ After build_lmt for subj ---------");
			lmt_table.print();
		}
		if (!clip.isEmpty()) {
			c_heap = Clip.build_lmt(lmt_table, sbte, clip, Clip.CLIP, op);
		}
		if (Clip.DEBUG) {
			//console.log("");
			//console.log(" ------------ After build_lmt for clip ---------");
			lmt_table.print();
		}
		/* Return a NULL result if no contours contribute */
		if (lmt_table.top_node == null) {
			return result;
		}
		/* Build scanbeam table from scanbeam tree */
		var sbt = sbte.build_sbt();
		var parity = [];
		parity[0] = Clip.LEFT;
		parity[1] = Clip.LEFT;
		/* Invert clip polygon for difference operation */
		if (op == OperationType.GPC_DIFF) {
			parity[Clip.CLIP] = Clip.RIGHT;
		}
		if (Clip.DEBUG) {
			//console.log(sbt);
		}
		var local_min = lmt_table.top_node;
		var out_poly = new TopPolygonNode(); // used to create resulting Poly
		var aet = new AetTree();
		var scanbeam = 0;
		/* Process each scanbeam */
		while (scanbeam < sbt.length) {
			/* Set yb and yt to the bottom and top of the scanbeam */
			var yb = sbt[scanbeam++];
			var yt = 0.0;
			var dy = 0.0;
			if (scanbeam < sbt.length) {
				yt = sbt[scanbeam];
				dy = yt - yb;
			}
			/* === SCANBEAM BOUNDARY PROCESSING ================================ */
			/* If LMT node corresponding to yb exists */
			if (local_min != null) {
				if (local_min.y == yb) {
					/* Add edges starting at this local minimum to the AET */
					for (var edge = local_min.first_bound; (edge != null); edge = edge.next_bound) {
						Clip.add_edge_to_aet(aet, edge);
					}
					local_min = local_min.next;
				}
			}
			if (Clip.DEBUG) {
				aet.print();
			}
			/* Set dummy previous x value */
			var px = -Number.MAX_VALUE;
			/* Create bundles within AET */
			var e0 = aet.top_node;
			var e1 = aet.top_node;
			/* Set up bundle fields of first edge */
			aet.top_node.bundle[Clip.ABOVE][aet.top_node.type] = (aet.top_node.top.y != yb) ? 1 : 0;
			aet.top_node.bundle[Clip.ABOVE][((aet.top_node.type == 0) ? 1 : 0)] = 0;
			aet.top_node.bstate[Clip.ABOVE] = BundleState.UNBUNDLED;
			for (var next_edge = aet.top_node.next; (next_edge != null); next_edge = next_edge.next) {
				var ne_type = next_edge.type;
				var ne_type_opp = ((next_edge.type == 0) ? 1 : 0); //next edge type opposite
				/* Set up bundle fields of next edge */
				next_edge.bundle[Clip.ABOVE][ne_type] = (next_edge.top.y != yb) ? 1 : 0;
				next_edge.bundle[Clip.ABOVE][ne_type_opp] = 0;
				next_edge.bstate[Clip.ABOVE] = BundleState.UNBUNDLED;
				/* Bundle edges above the scanbeam boundary if they coincide */
				if (next_edge.bundle[Clip.ABOVE][ne_type] == 1) {
					if (Clip.EQ(e0.xb, next_edge.xb) && Clip.EQ(e0.dx, next_edge.dx) && (e0.top.y != yb)) {
						next_edge.bundle[Clip.ABOVE][ne_type] ^= e0.bundle[Clip.ABOVE][ne_type];
						next_edge.bundle[Clip.ABOVE][ne_type_opp] = e0.bundle[Clip.ABOVE][ne_type_opp];
						next_edge.bstate[Clip.ABOVE] = BundleState.BUNDLE_HEAD;
						e0.bundle[Clip.ABOVE][Clip.CLIP] = 0;
						e0.bundle[Clip.ABOVE][Clip.SUBJ] = 0;
						e0.bstate[Clip.ABOVE] = BundleState.BUNDLE_TAIL;
					}
					e0 = next_edge;
				}
			}
			var horiz = [];
			horiz[Clip.CLIP] = HState.NH;
			horiz[Clip.SUBJ] = HState.NH;
			var exists = [];
			exists[Clip.CLIP] = 0;
			exists[Clip.SUBJ] = 0;
			var cf = null;
			/* Process each edge at this scanbeam boundary */
			for (var edge = aet.top_node; (edge != null); edge = edge.next) {
				exists[Clip.CLIP] = edge.bundle[Clip.ABOVE][Clip.CLIP] + (edge.bundle[Clip.BELOW][Clip.CLIP] << 1);
				exists[Clip.SUBJ] = edge.bundle[Clip.ABOVE][Clip.SUBJ] + (edge.bundle[Clip.BELOW][Clip.SUBJ] << 1);
				if ((exists[Clip.CLIP] != 0) || (exists[Clip.SUBJ] != 0)) {
					/* Set bundle side */
					edge.bside[Clip.CLIP] = parity[Clip.CLIP];
					edge.bside[Clip.SUBJ] = parity[Clip.SUBJ];
					var contributing = false;
					var br = 0;
					var bl = 0;
					var tr = 0;
					var tl = 0;
					/* Determine contributing status and quadrant occupancies */
					if ((op == OperationType.GPC_DIFF) || (op == OperationType.GPC_INT)) {
						contributing = ((exists[Clip.CLIP] != 0) && ((parity[Clip.SUBJ] != 0) || (horiz[Clip.SUBJ] != 0))) ||
						((exists[Clip.SUBJ] != 0) && ((parity[Clip.CLIP] != 0) || (horiz[Clip.CLIP] != 0))) ||
						((exists[Clip.CLIP] != 0) && (exists[Clip.SUBJ] != 0) && (parity[Clip.CLIP] == parity[Clip.SUBJ]));
						br = ((parity[Clip.CLIP] != 0) && (parity[Clip.SUBJ] != 0)) ? 1 : 0;
						bl = ( ((parity[Clip.CLIP] ^ edge.bundle[Clip.ABOVE][Clip.CLIP]) != 0) &&
						((parity[Clip.SUBJ] ^ edge.bundle[Clip.ABOVE][Clip.SUBJ]) != 0) ) ? 1 : 0;
						tr = ( ((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP] != HState.NH) ? 1 : 0)) != 0) &&
						((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ] != HState.NH) ? 1 : 0)) != 0) ) ? 1 : 0;
						tl = (((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP] != HState.NH) ? 1 : 0) ^ edge.bundle[Clip.BELOW][Clip.CLIP]) != 0) &&
						((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ] != HState.NH) ? 1 : 0) ^ edge.bundle[Clip.BELOW][Clip.SUBJ]) != 0)) ? 1 : 0;
					}
					else if (op == OperationType.GPC_XOR) {
						contributing = (exists[Clip.CLIP] != 0) || (exists[Clip.SUBJ] != 0);
						br = (parity[Clip.CLIP]) ^ (parity[Clip.SUBJ]);
						bl = (parity[Clip.CLIP] ^ edge.bundle[Clip.ABOVE][Clip.CLIP]) ^ (parity[Clip.SUBJ] ^ edge.bundle[Clip.ABOVE][Clip.SUBJ]);
						tr = (parity[Clip.CLIP] ^ ((horiz[Clip.CLIP] != HState.NH) ? 1 : 0)) ^ (parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ] != HState.NH) ? 1 : 0));
						tl = (parity[Clip.CLIP] ^ ((horiz[Clip.CLIP] != HState.NH) ? 1 : 0) ^ edge.bundle[Clip.BELOW][Clip.CLIP])
						^ (parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ] != HState.NH) ? 1 : 0) ^ edge.bundle[Clip.BELOW][Clip.SUBJ]);
					}
					else if (op == OperationType.GPC_UNION) {
						contributing = ((exists[Clip.CLIP] != 0) && (!(parity[Clip.SUBJ] != 0) || (horiz[Clip.SUBJ] != 0))) ||
						((exists[Clip.SUBJ] != 0) && (!(parity[Clip.CLIP] != 0) || (horiz[Clip.CLIP] != 0))) ||
						((exists[Clip.CLIP] != 0) && (exists[Clip.SUBJ] != 0) && (parity[Clip.CLIP] == parity[Clip.SUBJ]));
						br = ((parity[Clip.CLIP] != 0) || (parity[Clip.SUBJ] != 0)) ? 1 : 0;
						bl = (((parity[Clip.CLIP] ^ edge.bundle[Clip.ABOVE][Clip.CLIP]) != 0) || ((parity[Clip.SUBJ] ^ edge.bundle[Clip.ABOVE][Clip.SUBJ]) != 0)) ? 1 : 0;
						tr = ( ((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP] != HState.NH) ? 1 : 0)) != 0) ||
						((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ] != HState.NH) ? 1 : 0)) != 0) ) ? 1 : 0;
						tl = ( ((parity[Clip.CLIP] ^ ((horiz[Clip.CLIP] != HState.NH) ? 1 : 0) ^ edge.bundle[Clip.BELOW][Clip.CLIP]) != 0) ||
						((parity[Clip.SUBJ] ^ ((horiz[Clip.SUBJ] != HState.NH) ? 1 : 0) ^ edge.bundle[Clip.BELOW][Clip.SUBJ]) != 0) ) ? 1 : 0;
					}
					else {
						//console.log("ERROR : Unknown op");
					}
					/* Update parity */
					parity[Clip.CLIP] ^= edge.bundle[Clip.ABOVE][Clip.CLIP];
					parity[Clip.SUBJ] ^= edge.bundle[Clip.ABOVE][Clip.SUBJ];
					/* Update horizontal state */
					if (exists[Clip.CLIP] != 0) {
						horiz[Clip.CLIP] = HState.next_h_state[horiz[Clip.CLIP]][((exists[Clip.CLIP] - 1) << 1) + parity[Clip.CLIP]];
					}
					if (exists[Clip.SUBJ] != 0) {
						horiz[Clip.SUBJ] = HState.next_h_state[horiz[Clip.SUBJ]][((exists[Clip.SUBJ] - 1) << 1) + parity[Clip.SUBJ]];
					}
					if (contributing) {
						var xb = edge.xb;
						var vclass = VertexType.getType(tr, tl, br, bl);
						switch (vclass) {
							case VertexType.EMN:
							case VertexType.IMN:
								edge.outp[Clip.ABOVE] = out_poly.add_local_min(xb, yb);
								px = xb;
								cf = edge.outp[Clip.ABOVE];
								break;
							case VertexType.ERI:
								if (xb != px) {
									cf.add_right(xb, yb);
									px = xb;
								}
								edge.outp[Clip.ABOVE] = cf;
								cf = null;
								break;
							case VertexType.ELI:
								edge.outp[Clip.BELOW].add_left(xb, yb);
								px = xb;
								cf = edge.outp[Clip.BELOW];
								break;
							case VertexType.EMX:
								if (xb != px) {
									cf.add_left(xb, yb);
									px = xb;
								}
								out_poly.merge_right(cf, edge.outp[Clip.BELOW]);
								cf = null;
								break;
							case VertexType.ILI:
								if (xb != px) {
									cf.add_left(xb, yb);
									px = xb;
								}
								edge.outp[Clip.ABOVE] = cf;
								cf = null;
								break;
							case VertexType.IRI:
								edge.outp[Clip.BELOW].add_right(xb, yb);
								px = xb;
								cf = edge.outp[Clip.BELOW];
								edge.outp[Clip.BELOW] = null;
								break;
							case VertexType.IMX:
								if (xb != px) {
									cf.add_right(xb, yb);
									px = xb;
								}
								out_poly.merge_left(cf, edge.outp[Clip.BELOW]);
								cf = null;
								edge.outp[Clip.BELOW] = null;
								break;
							case VertexType.IMM:
								if (xb != px) {
									cf.add_right(xb, yb);
									px = xb;
								}
								out_poly.merge_left(cf, edge.outp[Clip.BELOW]);
								edge.outp[Clip.BELOW] = null;
								edge.outp[Clip.ABOVE] = out_poly.add_local_min(xb, yb);
								cf = edge.outp[Clip.ABOVE];
								break;
							case VertexType.EMM:
								if (xb != px) {
									cf.add_left(xb, yb);
									px = xb;
								}
								out_poly.merge_right(cf, edge.outp[Clip.BELOW]);
								edge.outp[Clip.BELOW] = null;
								edge.outp[Clip.ABOVE] = out_poly.add_local_min(xb, yb);
								cf = edge.outp[Clip.ABOVE];
								break;
							case VertexType.LED:
								if (edge.bot.y == yb)
									edge.outp[Clip.BELOW].add_left(xb, yb);
								edge.outp[Clip.ABOVE] = edge.outp[Clip.BELOW];
								px = xb;
								break;
							case VertexType.RED:
								if (edge.bot.y == yb)
									edge.outp[Clip.BELOW].add_right(xb, yb);
								edge.outp[Clip.ABOVE] = edge.outp[Clip.BELOW];
								px = xb;
								break;
							default:
								break;
						}
						/* End of switch */
					}
					/* End of contributing conditional */
				}
				/* End of edge exists conditional */
				if (Clip.DEBUG) {
					out_poly.print();
				}
				out_poly.print();
			}
			/* End of AET loop */
			/* Delete terminating edges from the AET, otherwise compute xt */
			for (var edge = aet.top_node; (edge != null); edge = edge.next) {
				if (edge.top.y == yb) {
					var prev_edge = edge.prev;
					var next_edge = edge.next;
					if (prev_edge != null)
						prev_edge.next = next_edge;
					else
						aet.top_node = next_edge;
					if (next_edge != null)
						next_edge.prev = prev_edge;
					/* Copy bundle head state to the adjacent tail edge if required */
					if ((edge.bstate[Clip.BELOW] == BundleState.BUNDLE_HEAD) && (prev_edge != null)) {
						if (prev_edge.bstate[Clip.BELOW] == BundleState.BUNDLE_TAIL) {
							prev_edge.outp[Clip.BELOW] = edge.outp[Clip.BELOW];
							prev_edge.bstate[Clip.BELOW] = BundleState.UNBUNDLED;
							if (prev_edge.prev != null) {
								if (prev_edge.prev.bstate[Clip.BELOW] == BundleState.BUNDLE_TAIL) {
									prev_edge.bstate[Clip.BELOW] = BundleState.BUNDLE_HEAD;
								}
							}
						}
					}
				}
				else {
					if (edge.top.y == yt)
						edge.xt = edge.top.x;
					else
						edge.xt = edge.bot.x + edge.dx * (yt - edge.bot.y);
				}
			}
			if (scanbeam < sbte.sbt_entries) {
				/* === SCANBEAM INTERIOR PROCESSING ============================== */
				/* Build intersection table for the current scanbeam */
				var it_table = new ItNodeTable();
				it_table.build_intersection_table(aet, dy);
				/* Process each node in the intersection table */
				for (var intersect = it_table.top_node; (intersect != null); intersect = intersect.next) {
					e0 = intersect.ie[0];
					e1 = intersect.ie[1];
					/* Only generate output for contributing intersections */
					if (((e0.bundle[Clip.ABOVE][Clip.CLIP] != 0) || (e0.bundle[Clip.ABOVE][Clip.SUBJ] != 0)) &&
							((e1.bundle[Clip.ABOVE][Clip.CLIP] != 0) || (e1.bundle[Clip.ABOVE][Clip.SUBJ] != 0))) {
						var p = e0.outp[Clip.ABOVE];
						var q = e1.outp[Clip.ABOVE];
						var ix = intersect.point.x;
						var iy = intersect.point.y + yb;
						var in_clip = ( ( (e0.bundle[Clip.ABOVE][Clip.CLIP] != 0) && !(e0.bside[Clip.CLIP] != 0)) ||
						( (e1.bundle[Clip.ABOVE][Clip.CLIP] != 0) && (e1.bside[Clip.CLIP] != 0)) ||
						(!(e0.bundle[Clip.ABOVE][Clip.CLIP] != 0) && !(e1.bundle[Clip.ABOVE][Clip.CLIP] != 0) &&
						(e0.bside[Clip.CLIP] != 0) && (e1.bside[Clip.CLIP] != 0) ) ) ? 1 : 0;
						var in_subj = ( ( (e0.bundle[Clip.ABOVE][Clip.SUBJ] != 0) && !(e0.bside[Clip.SUBJ] != 0)) ||
						( (e1.bundle[Clip.ABOVE][Clip.SUBJ] != 0) && (e1.bside[Clip.SUBJ] != 0)) ||
						(!(e0.bundle[Clip.ABOVE][Clip.SUBJ] != 0) && !(e1.bundle[Clip.ABOVE][Clip.SUBJ] != 0) &&
						(e0.bside[Clip.SUBJ] != 0) && (e1.bside[Clip.SUBJ] != 0) ) ) ? 1 : 0;
						var tr = 0
						var tl = 0;
						var br = 0;
						var bl = 0;
						/* Determine quadrant occupancies */
						if ((op == OperationType.GPC_DIFF) || (op == OperationType.GPC_INT)) {
							tr = ((in_clip != 0) && (in_subj != 0)) ? 1 : 0;
							tl = (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP]) != 0) && ((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ]) != 0)) ? 1 : 0;
							br = (((in_clip ^ e0.bundle[Clip.ABOVE][Clip.CLIP]) != 0) && ((in_subj ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]) != 0)) ? 1 : 0;
							bl = (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP] ^ e0.bundle[Clip.ABOVE][Clip.CLIP]) != 0) &&
							((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ] ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]) != 0) ) ? 1 : 0;
						}
						else if (op == OperationType.GPC_XOR) {
							tr = in_clip ^ in_subj;
							tl = (in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP]) ^ (in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ]);
							br = (in_clip ^ e0.bundle[Clip.ABOVE][Clip.CLIP]) ^ (in_subj ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]);
							bl = (in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP] ^ e0.bundle[Clip.ABOVE][Clip.CLIP])
							^ (in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ] ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]);
						}
						else if (op == OperationType.GPC_UNION) {
							tr = ((in_clip != 0) || (in_subj != 0)) ? 1 : 0;
							tl = (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP]) != 0) || ((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ]) != 0)) ? 1 : 0;
							br = (((in_clip ^ e0.bundle[Clip.ABOVE][Clip.CLIP]) != 0) || ((in_subj ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]) != 0)) ? 1 : 0;
							bl = (((in_clip ^ e1.bundle[Clip.ABOVE][Clip.CLIP] ^ e0.bundle[Clip.ABOVE][Clip.CLIP]) != 0) ||
							((in_subj ^ e1.bundle[Clip.ABOVE][Clip.SUBJ] ^ e0.bundle[Clip.ABOVE][Clip.SUBJ]) != 0)) ? 1 : 0;
						}
						else {
							//console.log("ERROR : Unknown op type, "+op);
						}
						var vclass = VertexType.getType(tr, tl, br, bl);
						switch (vclass) {
							case VertexType.EMN:
								e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
								e1.outp[Clip.ABOVE] = e0.outp[Clip.ABOVE];
								break;
							case VertexType.ERI:
								if (p != null) {
									p.add_right(ix, iy);
									e1.outp[Clip.ABOVE] = p;
									e0.outp[Clip.ABOVE] = null;
								}
								break;
							case VertexType.ELI:
								if (q != null) {
									q.add_left(ix, iy);
									e0.outp[Clip.ABOVE] = q;
									e1.outp[Clip.ABOVE] = null;
								}
								break;
							case VertexType.EMX:
								if ((p != null) && (q != null)) {
									p.add_left(ix, iy);
									out_poly.merge_right(p, q);
									e0.outp[Clip.ABOVE] = null;
									e1.outp[Clip.ABOVE] = null;
								}
								break;
							case VertexType.IMN:
								e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
								e1.outp[Clip.ABOVE] = e0.outp[Clip.ABOVE];
								break;
							case VertexType.ILI:
								if (p != null) {
									p.add_left(ix, iy);
									e1.outp[Clip.ABOVE] = p;
									e0.outp[Clip.ABOVE] = null;
								}
								break;
							case VertexType.IRI:
								if (q != null) {
									q.add_right(ix, iy);
									e0.outp[Clip.ABOVE] = q;
									e1.outp[Clip.ABOVE] = null;
								}
								break;
							case VertexType.IMX:
								if ((p != null) && (q != null)) {
									p.add_right(ix, iy);
									out_poly.merge_left(p, q);
									e0.outp[Clip.ABOVE] = null;
									e1.outp[Clip.ABOVE] = null;
								}
								break;
							case VertexType.IMM:
								if ((p != null) && (q != null)) {
									p.add_right(ix, iy);
									out_poly.merge_left(p, q);
									e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
									e1.outp[Clip.ABOVE] = e0.outp[Clip.ABOVE];
								}
								break;
							case VertexType.EMM:
								if ((p != null) && (q != null)) {
									p.add_left(ix, iy);
									out_poly.merge_right(p, q);
									e0.outp[Clip.ABOVE] = out_poly.add_local_min(ix, iy);
									e1.outp[Clip.ABOVE] = e0.outp[Clip.ABOVE];
								}
								break;
							default:
								break;
						}
						/* End of switch */
					}
					/* End of contributing intersection conditional */
					/* Swap bundle sides in response to edge crossing */
					if (e0.bundle[Clip.ABOVE][Clip.CLIP] != 0)
						e1.bside[Clip.CLIP] = (e1.bside[Clip.CLIP] == 0) ? 1 : 0;
					if (e1.bundle[Clip.ABOVE][Clip.CLIP] != 0)
						e0.bside[Clip.CLIP] = (e0.bside[Clip.CLIP] == 0) ? 1 : 0;
					if (e0.bundle[Clip.ABOVE][Clip.SUBJ] != 0)
						e1.bside[Clip.SUBJ] = (e1.bside[Clip.SUBJ] == 0) ? 1 : 0;
					if (e1.bundle[Clip.ABOVE][Clip.SUBJ] != 0)
						e0.bside[Clip.SUBJ] = (e0.bside[Clip.SUBJ] == 0) ? 1 : 0;
					/* Swap e0 and e1 bundles in the AET */
					var prev_edge = e0.prev;
					var next_edge = e1.next;
					if (next_edge != null) {
						next_edge.prev = e0;
					}
					if (e0.bstate[Clip.ABOVE] == BundleState.BUNDLE_HEAD) {
						var search = true;
						while (search) {
							prev_edge = prev_edge.prev;
							if (prev_edge != null) {
								if (prev_edge.bstate[Clip.ABOVE] != BundleState.BUNDLE_TAIL) {
									search = false;
								}
							}
							else {
								search = false;
							}
						}
					}
					if (prev_edge == null) {
						aet.top_node.prev = e1;
						e1.next = aet.top_node;
						aet.top_node = e0.next;
					}
					else {
						prev_edge.next.prev = e1;
						e1.next = prev_edge.next;
						prev_edge.next = e0.next;
					}
					e0.next.prev = prev_edge;
					e1.next.prev = e1;
					e0.next = next_edge;
					if (Clip.DEBUG) {
						out_poly.print();
					}
				}
				/* End of IT loop*/
				/* Prepare for next scanbeam */
				for (var edge = aet.top_node; (edge != null); edge = edge.next) {
					var next_edge = edge.next;
					var succ_edge = edge.succ;
					if ((edge.top.y == yt) && (succ_edge != null)) {
						/* Replace AET edge by its successor */
						succ_edge.outp[Clip.BELOW] = edge.outp[Clip.ABOVE];
						succ_edge.bstate[Clip.BELOW] = edge.bstate[Clip.ABOVE];
						succ_edge.bundle[Clip.BELOW][Clip.CLIP] = edge.bundle[Clip.ABOVE][Clip.CLIP];
						succ_edge.bundle[Clip.BELOW][Clip.SUBJ] = edge.bundle[Clip.ABOVE][Clip.SUBJ];
						var prev_edge = edge.prev;
						if (prev_edge != null)
							prev_edge.next = succ_edge;
						else
							aet.top_node = succ_edge;
						if (next_edge != null)
							next_edge.prev = succ_edge;
						succ_edge.prev = prev_edge;
						succ_edge.next = next_edge;
					}
					else {
						/* Update this edge */
						edge.outp[Clip.BELOW] = edge.outp[Clip.ABOVE];
						edge.bstate[Clip.BELOW] = edge.bstate[Clip.ABOVE];
						edge.bundle[Clip.BELOW][Clip.CLIP] = edge.bundle[Clip.ABOVE][Clip.CLIP];
						edge.bundle[Clip.BELOW][Clip.SUBJ] = edge.bundle[Clip.ABOVE][Clip.SUBJ];
						edge.xb = edge.xt;
					}
					edge.outp[Clip.ABOVE] = null;
				}
			}
		}
		/* === END OF SCANBEAM PROCESSING ================================== */
		/* Generate result polygon from out_poly */
		result = out_poly.getResult(polyClass);
		//console.log("result = "+result);
		return result;
	}
	static.EQ = function (a, b) {
		return (Math.abs(a - b) <= Clip.GPC_EPSILON);
	}
	static.PREV_INDEX = function (i, n) {
		return ((i - 1 + n) % n);
	}
	static.NEXT_INDEX = function (i, n) {
		return ((i + 1) % n);
	}
	static.OPTIMAL = function (p, i) {
		return (p.getY(Clip.PREV_INDEX(i, p.getNumPoints())) != p.getY(i)) ||
				(p.getY(Clip.NEXT_INDEX(i, p.getNumPoints())) != p.getY(i));
	}
	static.create_contour_bboxes = function (p) {
		var box = [];
		/* Construct contour bounding boxes */
		for (var c = 0; c < p.getNumInnerPoly(); c++) {
			var inner_poly = p.getInnerPoly(c);
			box[c] = inner_poly.getBounds();
		}
		return box;
	}
	static.minimax_test = function (subj, clip, op) {
		var s_bbox = Clip.create_contour_bboxes(subj);
		var c_bbox = Clip.create_contour_bboxes(clip);
		var subj_num_poly = subj.getNumInnerPoly();
		var clip_num_poly = clip.getNumInnerPoly();
		var o_table = ArrayHelper.create2DArray(subj_num_poly, clip_num_poly);
		/* Check all subject contour bounding boxes against clip boxes */
		for (var s = 0; s < subj_num_poly; s++) {
			for (var c = 0; c < clip_num_poly; c++) {
				o_table[s][c] =
						(!((s_bbox[s].getMaxX() < c_bbox[c].getMinX()) ||
						(s_bbox[s].getMinX() > c_bbox[c].getMaxX()))) &&
						(!((s_bbox[s].getMaxY() < c_bbox[c].getMinY()) ||
						(s_bbox[s].getMinY() > c_bbox[c].getMaxY())));
			}
		}
		/* For each clip contour, search for any subject contour overlaps */
		for (var c = 0; c < clip_num_poly; c++) {
			var overlap = false;
			for (var s = 0; !overlap && (s < subj_num_poly); s++) {
				overlap = o_table[s][c];
			}
			if (!overlap) {
				clip.setContributing(c, false); // Flag non contributing status
			}
		}
		if (op == OperationType.GPC_INT) {
			/* For each subject contour, search for any clip contour overlaps */
			for (var s = 0; s < subj_num_poly; s++) {
				var overlap = false;
				for (var c = 0; !overlap && (c < clip_num_poly); c++) {
					overlap = o_table[s][c];
				}
				if (!overlap) {
					subj.setContributing(s, false); // Flag non contributing status
				}
			}
		}
	}
	static.bound_list = function (lmt_table, y) {
		if (lmt_table.top_node == null) {
			lmt_table.top_node = new LmtNode(y);
			return lmt_table.top_node;
		}
		else {
			var prev = null;
			var node = lmt_table.top_node;
			var done = false;
			while (!done) {
				if (y < node.y) {
					/* Insert a new LMT node before the current node */
					var existing_node = node;
					node = new LmtNode(y);
					node.next = existing_node;
					if (prev == null) {
						lmt_table.top_node = node;
					}
					else {
						prev.next = node;
					}
					//               if( existing_node == lmt_table.top_node )
					//               {
					//                  lmt_table.top_node = node ;
					//               }
					done = true;
				}
				else if (y > node.y) {
					/* Head further up the LMT */
					if (node.next == null) {
						node.next = new LmtNode(y);
						node = node.next;
						done = true;
					}
					else {
						prev = node;
						node = node.next;
					}
				}
				else {
					/* Use this existing LMT node */
					done = true;
				}
			}
			return node;
		}
	}
	static.insert_bound = function (lmt_node, e) {
		if (lmt_node.first_bound == null) {
			/* Link node e to the tail of the list */
			lmt_node.first_bound = e;
		}
		else {
			var done = false;
			var prev_bound = null;
			var current_bound = lmt_node.first_bound;
			while (!done) {
				/* Do primary sort on the x field */
				if (e.bot.x < current_bound.bot.x) {
					/* Insert a new node mid-list */
					if (prev_bound == null) {
						lmt_node.first_bound = e;
					}
					else {
						prev_bound.next_bound = e;
					}
					e.next_bound = current_bound;
					//               EdgeNode existing_bound = current_bound ;
					//               current_bound = e ;
					//               current_bound.next_bound = existing_bound ;
					//               if( lmt_node.first_bound == existing_bound )
					//               {
					//                  lmt_node.first_bound = current_bound ;
					//               }
					done = true;
				}
				else if (e.bot.x == current_bound.bot.x) {
					/* Do secondary sort on the dx field */
					if (e.dx < current_bound.dx) {
						/* Insert a new node mid-list */
						if (prev_bound == null) {
							lmt_node.first_bound = e;
						}
						else {
							prev_bound.next_bound = e;
						}
						e.next_bound = current_bound;
						//                  EdgeNode existing_bound = current_bound ;
						//                  current_bound = e ;
						//                  current_bound.next_bound = existing_bound ;
						//                  if( lmt_node.first_bound == existing_bound )
						//                  {
						//                     lmt_node.first_bound = current_bound ;
						//                  }
						done = true;
					}
					else {
						/* Head further down the list */
						if (current_bound.next_bound == null) {
							current_bound.next_bound = e;
							done = true;
						}
						else {
							prev_bound = current_bound;
							current_bound = current_bound.next_bound;
						}
					}
				}
				else {
					/* Head further down the list */
					if (current_bound.next_bound == null) {
						current_bound.next_bound = e;
						done = true;
					}
					else {
						prev_bound = current_bound;
						current_bound = current_bound.next_bound;
					}
				}
			}
		}
	}
	static.add_edge_to_aet = function (aet, edge) {
		if (aet.top_node == null) {
			/* Append edge onto the tail end of the AET */
			aet.top_node = edge;
			edge.prev = null;
			edge.next = null;
		}
		else {
			var current_edge = aet.top_node;
			var prev = null;
			var done = false;
			while (!done) {
				/* Do primary sort on the xb field */
				if (edge.xb < current_edge.xb) {
					/* Insert edge here (before the AET edge) */
					edge.prev = prev;
					edge.next = current_edge;
					current_edge.prev = edge;
					if (prev == null) {
						aet.top_node = edge;
					}
					else {
						prev.next = edge;
					}
					//               if( current_edge == aet.top_node )
					//               {
					//                  aet.top_node = edge ;
					//               }
					//               current_edge = edge ;
					done = true;
				}
				else if (edge.xb == current_edge.xb) {
					/* Do secondary sort on the dx field */
					if (edge.dx < current_edge.dx) {
						/* Insert edge here (before the AET edge) */
						edge.prev = prev;
						edge.next = current_edge;
						current_edge.prev = edge;
						if (prev == null) {
							aet.top_node = edge;
						}
						else {
							prev.next = edge;
						}
						//                  if( current_edge == aet.top_node )
						//                  {
						//                     aet.top_node = edge ;
						//                  }
						//                  current_edge = edge ;
						done = true;
					}
					else {
						/* Head further into the AET */
						prev = current_edge;
						if (current_edge.next == null) {
							current_edge.next = edge;
							edge.prev = current_edge;
							edge.next = null;
							done = true;
						}
						else {
							current_edge = current_edge.next;
						}
					}
				}
				else {
					/* Head further into the AET */
					prev = current_edge;
					if (current_edge.next == null) {
						current_edge.next = edge;
						edge.prev = current_edge;
						edge.next = null;
						done = true;
					}
					else {
						current_edge = current_edge.next;
					}
				}
			}
		}
	}
	static.add_to_sbtree = function (sbte, y) {
		if (sbte.sb_tree == null) {
			/* Add a new tree node here */
			sbte.sb_tree = new ScanBeamTree(y);
			sbte.sbt_entries++;
			return;
		}
		var tree_node = sbte.sb_tree;
		var done = false;
		while (!done) {
			if (tree_node.y > y) {
				if (tree_node.less == null) {
					tree_node.less = new ScanBeamTree(y);
					sbte.sbt_entries++;
					done = true;
				}
				else {
					tree_node = tree_node.less;
				}
			}
			else if (tree_node.y < y) {
				if (tree_node.more == null) {
					tree_node.more = new ScanBeamTree(y);
					sbte.sbt_entries++;
					done = true;
				}
				else {
					tree_node = tree_node.more;
				}
			}
			else {
				done = true;
			}
		}
	}
	static.build_lmt = function (lmt_table,
	                             sbte,
	                             p,
	                             type, //poly type SUBJ/Clip.CLIP
	                             op) {
		/* Create the entire input polygon edge table in one go */
		var edge_table = new EdgeTable();
		for (var c = 0; c < p.getNumInnerPoly(); c++) {
			var ip = p.getInnerPoly(c);
			if (!ip.isContributing(0)) {
				/* Ignore the non-contributing contour */
				ip.setContributing(0, true);
			}
			else {
				
				
				/* Perform contour optimisation */
				var num_vertices = 0;
				var e_index = 0;
				edge_table = new EdgeTable();
				for (var i = 0; i < ip.getNumPoints(); i++) {
					if (Clip.OPTIMAL(ip, i)) {
						var x = ip.getX(i);
						var y = ip.getY(i);
						edge_table.addNode(x, y);
						/* Record vertex in the scanbeam table */
						Clip.add_to_sbtree(sbte, ip.getY(i));
						num_vertices++;
					}
				}
				/* Do the contour forward pass */
				for (var min = 0; min < num_vertices; min++) {
					/* If a forward local minimum... */
					if (edge_table.FWD_MIN(min)) {
						/* Search for the next local maximum... */
						var num_edges = 1;
						var max = Clip.NEXT_INDEX(min, num_vertices);
						while (edge_table.NOT_FMAX(max)) {
							num_edges++;
							max = Clip.NEXT_INDEX(max, num_vertices);
						}
						/* Build the next edge list */
						var v = min;
						var e = edge_table.getNode(e_index);
						e.bstate[Clip.BELOW] = BundleState.UNBUNDLED;
						e.bundle[Clip.BELOW][Clip.CLIP] = 0;
						e.bundle[Clip.BELOW][Clip.SUBJ] = 0;
						for (var i = 0; i < num_edges; i++) {
							var ei = edge_table.getNode(e_index + i);
							var ev = edge_table.getNode(v);
							ei.xb = ev.vertex.x;
							ei.bot.x = ev.vertex.x;
							ei.bot.y = ev.vertex.y;
							v = Clip.NEXT_INDEX(v, num_vertices);
							ev = edge_table.getNode(v);
							ei.top.x = ev.vertex.x;
							ei.top.y = ev.vertex.y;
							ei.dx = (ev.vertex.x - ei.bot.x) / (ei.top.y - ei.bot.y);
							ei.type = type;
							ei.outp[Clip.ABOVE] = null;
							ei.outp[Clip.BELOW] = null;
							ei.next = null;
							ei.prev = null;
							ei.succ = ((num_edges > 1) && (i < (num_edges - 1))) ? edge_table.getNode(e_index + i + 1) : null;
							ei.pred = ((num_edges > 1) && (i > 0)) ? edge_table.getNode(e_index + i - 1) : null;
							ei.next_bound = null;
							ei.bside[Clip.CLIP] = (op == OperationType.GPC_DIFF) ? Clip.RIGHT : Clip.LEFT;
							ei.bside[Clip.SUBJ] = Clip.LEFT;
						}
						Clip.insert_bound(Clip.bound_list(lmt_table, edge_table.getNode(min).vertex.y), e);
						if (Clip.DEBUG) {
							//console.log("fwd");
							lmt_table.print();
						}
						e_index += num_edges;
					}
				}
				/* Do the contour reverse pass */
				for (var min = 0; min < num_vertices; min++) {
					/* If a reverse local minimum... */
					if (edge_table.REV_MIN(min)) {
						/* Search for the previous local maximum... */
						var num_edges = 1;
						var max = Clip.PREV_INDEX(min, num_vertices);
						while (edge_table.NOT_RMAX(max)) {
							num_edges++;
							max = Clip.PREV_INDEX(max, num_vertices);
						}
						/* Build the previous edge list */
						var v = min;
						var e = edge_table.getNode(e_index);
						e.bstate[Clip.BELOW] = BundleState.UNBUNDLED;
						e.bundle[Clip.BELOW][Clip.CLIP] = 0;
						e.bundle[Clip.BELOW][Clip.SUBJ] = 0;
						for (var i = 0; i < num_edges; i++) {
							var ei = edge_table.getNode(e_index + i);
							var ev = edge_table.getNode(v);
							ei.xb = ev.vertex.x;
							ei.bot.x = ev.vertex.x;
							ei.bot.y = ev.vertex.y;
							v = Clip.PREV_INDEX(v, num_vertices);
							ev = edge_table.getNode(v);
							ei.top.x = ev.vertex.x;
							ei.top.y = ev.vertex.y;
							ei.dx = (ev.vertex.x - ei.bot.x) / (ei.top.y - ei.bot.y);
							ei.type = type;
							ei.outp[Clip.ABOVE] = null;
							ei.outp[Clip.BELOW] = null;
							ei.next = null;
							ei.prev = null;
							ei.succ = ((num_edges > 1) && (i < (num_edges - 1))) ? edge_table.getNode(e_index + i + 1) : null;
							ei.pred = ((num_edges > 1) && (i > 0)) ? edge_table.getNode(e_index + i - 1) : null;
							ei.next_bound = null;
							ei.bside[Clip.CLIP] = (op == OperationType.GPC_DIFF) ? Clip.RIGHT : Clip.LEFT;
							ei.bside[Clip.SUBJ] = Clip.LEFT;
						}
						Clip.insert_bound(Clip.bound_list(lmt_table, edge_table.getNode(min).vertex.y), e);
						if (Clip.DEBUG) {
							//console.log("rev");
							lmt_table.print();
						}
						e_index += num_edges;
					}
				}
			}
		}
		return edge_table;
	}
	static.add_st_edge = function (st, it, edge, dy) {
		if (st == null) {
			/* Append edge onto the tail end of the ST */
			st = new StNode(edge, null);
		}
		else {
			var den = (st.xt - st.xb) - (edge.xt - edge.xb);
			/* If new edge and ST edge don't cross */
			if ((edge.xt >= st.xt) || (edge.dx == st.dx) || (Math.abs(den) <= Clip.GPC_EPSILON)) {
				/* No intersection - insert edge here (before the ST edge) */
				var existing_node = st;
				st = new StNode(edge, existing_node);
			}
			else {
				/* Compute intersection between new edge and ST edge */
				var r = (edge.xb - st.xb) / den;
				var x = st.xb + r * (st.xt - st.xb);
				var y = r * dy;
				/* Insert the edge pointers and the intersection point in the IT */
				it.top_node = Clip.add_intersection(it.top_node, st.edge, edge, x, y);
				/* Head further into the ST */
				st.prev = Clip.add_st_edge(st.prev, it, edge, dy);
			}
		}
		return st;
	}
	static.add_intersection = function (it_node,
	                                    edge0,
	                                    edge1,
	                                    x,
	                                    y) {
		if (it_node == null) {
			/* Append a new node to the tail of the list */
			it_node = new ItNode(edge0, edge1, x, y, null);
		}
		else {
			if (it_node.point.y > y) {
				/* Insert a new node mid-list */
				var existing_node = it_node;
				it_node = new ItNode(edge0, edge1, x, y, existing_node);
			}
			else {
				/* Head further down the list */
				it_node.next = Clip.add_intersection(it_node.next, edge0, edge1, x, y);
			}
		}
		return it_node;
	}
};sttMets();
function aet() {
	/////////// AetTree ////////////////////////////////////
	gpcas.geometry.AetTree = function () {
		this.top_node = null; //EdgeNode
	};
	gpcas.geometry.AetTree.prototype.print = function () {
		//console.log("aet");
		for (var edge = this.top_node; (edge != null); edge = edge.next) {
			//console.log("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
		}
	}
};aet()
function bundleState() {
	///////////////  BundleState  //////////////////////////////
	gpcas.geometry.BundleState = function (state) {
		this.m_State = state; //String
	};
	gpcas.geometry.BundleState.UNBUNDLED = new gpcas.geometry.BundleState("UNBUNDLED");
	gpcas.geometry.BundleState.BUNDLE_HEAD = new gpcas.geometry.BundleState("BUNDLE_HEAD");
	gpcas.geometry.BundleState.BUNDLE_TAIL = new gpcas.geometry.BundleState("BUNDLE_TAIL");
	gpcas.geometry.BundleState.prototype.toString = function () {
		return this.m_State;
	};
};bundleState()
function lines() {
	function edge() {
		/////////////// EdgeNode ////////////////////////////
		gpcas.geometry.EdgeNode = function () {
			this.vertex = new Point();
			/* Piggy-backed contour vertex data  */
			this.bot = new Point();
			/* Edge lower (x, y) coordinate      */
			this.top = new Point();
			/* Edge upper (x, y) coordinate      */
			this.xb;
			/* Scanbeam bottom x coordinate      */
			this.xt;
			/* Scanbeam top x coordinate         */
			this.dx;
			/* Change in x for a unit y increase */
			this.type;
			/* Clip / subject edge flag          */
			this.bundle = ArrayHelper.create2DArray(2, 2);
			/* Bundle edge flags                 */
			this.bside = [];
			/* Bundle left / right indicators    */
			this.bstate = [];
			/* Edge bundle state                 */
			this.outp = [];
			/* Output polygon / tristrip pointer */
			this.prev;
			/* Previous edge in the AET          */
			this.next;
			/* Next edge in the AET              */
			this.pred;
			/* Edge connected at the lower end   */
			this.succ;
			/* Edge connected at the upper end   */
			this.next_bound;
			/* Pointer to next bound in LMT      */
		};
		function edgeTable() {
			////////////////   EdgeTable /////////////////////////////////////////
			gpcas.geometry.EdgeTable = function () {
				this.m_List = new ArrayList();
			};
			gpcas.geometry.EdgeTable.prototype.addNode = function (x, y) {
				var node = new EdgeNode();
				node.vertex.x = x;
				node.vertex.y = y;
				this.m_List.add(node);
			}
			gpcas.geometry.EdgeTable.prototype.getNode = function (index) {
				return this.m_List.get(index);
			}
			gpcas.geometry.EdgeTable.prototype.FWD_MIN = function (i) {
				var m_List = this.m_List;
				var prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
				var next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
				var ith = (m_List.get(i));
				return ((prev.vertex.y >= ith.vertex.y) &&
				(next.vertex.y > ith.vertex.y));
			}
			gpcas.geometry.EdgeTable.prototype.NOT_FMAX = function (i) {
				var m_List = this.m_List;
				var next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
				var ith = (m_List.get(i));
				return (next.vertex.y > ith.vertex.y);
			}
			gpcas.geometry.EdgeTable.prototype.REV_MIN = function (i) {
				var m_List = this.m_List;
				var prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
				var next = (m_List.get(Clip.NEXT_INDEX(i, m_List.size())));
				var ith = (m_List.get(i));
				return ((prev.vertex.y > ith.vertex.y) && (next.vertex.y >= ith.vertex.y));
			}
			gpcas.geometry.EdgeTable.prototype.NOT_RMAX = function (i) {
				var m_List = this.m_List;
				var prev = (m_List.get(Clip.PREV_INDEX(i, m_List.size())));
				var ith = (m_List.get(i));
				return (prev.vertex.y > ith.vertex.y);
			}
		};
		edgeTable();
		function hState() {
			/////////////////////   HState   //////////////////////////////////////
			gpcas.geometry.HState = function () {
			};
			gpcas.geometry.HState.NH = 0;
			/* No horizontal edge                */
			gpcas.geometry.HState.BH = 1;
			/* Bottom horizontal edge            */
			gpcas.geometry.HState.TH = 2;
			/* Top horizontal edge               */
			var NH = gpcas.geometry.HState.NH;
			var BH = gpcas.geometry.HState.BH;
			var TH = gpcas.geometry.HState.TH;
			/* Horizontal edge state transitions within scanbeam boundary */
			gpcas.geometry.HState.next_h_state = [
				/*        ABOVE     BELOW     CROSS */
				/*        L   R     L   R     L   R */
				/* NH */ [BH, TH, TH, BH, NH, NH],
				/* BH */ [NH, NH, NH, NH, TH, TH],
				/* TH */ [NH, NH, NH, NH, BH, BH]
			];
		};
		hState()
	};
	edge()
	function intersec() {
///////////////////////    	  IntersectionPoint /////////////////////////////
		gpcas.geometry.IntersectionPoint = function (p1, p2, p3) {
			this.polygonPoint1 = p1;
			/* of Point */
			;
			this.polygonPoint2 = p2;
			/* of Point */
			;
			this.intersectionPoint = p3;
		};
		gpcas.geometry.IntersectionPoint.prototype.toString = function () {
			return "P1 :" + polygonPoint1.toString() + " P2:" + polygonPoint2.toString() + " IP:" + intersectionPoint.toString();
		}
///////////////////////////    ItNode   ///////////////
		gpcas.geometry.ItNode = function (edge0, edge1, x, y, next) {
			this.ie = [];
			/* Intersecting edge (bundle) pair   */
			this.point = new Point(x, y);
			/* Point of intersection             */
			this.next = next;
			/* The next intersection table node  */
			this.ie[0] = edge0;
			this.ie[1] = edge1;
		};
///////////////////////////    ItNodeTable   ///////////////
		gpcas.geometry.ItNodeTable = function () {
			this.top_node;
		}
		gpcas.geometry.ItNodeTable.prototype.build_intersection_table = function (aet, dy) {
			var st = null;
			/* Process each AET edge */
			for (var edge = aet.top_node; (edge != null); edge = edge.next) {
				if ((edge.bstate[Clip.ABOVE] == BundleState.BUNDLE_HEAD) ||
						(edge.bundle[Clip.ABOVE][Clip.CLIP] != 0) ||
						(edge.bundle[Clip.ABOVE][Clip.SUBJ] != 0)) {
					st = Clip.add_st_edge(st, this, edge, dy);
				}
			}
		}
////////////// Line //////////////////////////
	};
	intersec()
	function line() {
		gpcas.geometry.Line = function () {
			this.start;
			this.end;
		}
		function lineHelper() {
////////////   LineHelper /////////////////////
			gpcas.geometry.LineHelper = function () {
			};
			gpcas.geometry.LineHelper.equalPoint = function (p1, p2) {
				return ((p1[0] == p2[0]) && (p1[1] == p2[1]));
			}
			gpcas.geometry.LineHelper.equalVertex = function (s1, e1, s2, e2) {
				return (
				((gpcas.geometry.LineHelper.equalPoint(s1, s2)) && (gpcas.geometry.LineHelper.equalPoint(e1, e2)))
				||
				((gpcas.geometry.LineHelper.equalPoint(s1, e2)) && (gpcas.geometry.LineHelper.equalPoint(e1, s2)))
				);
			}
			gpcas.geometry.LineHelper.distancePoints = function (p1, p2) {
				return Math.sqrt((p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1]));
			}
			gpcas.geometry.LineHelper.clonePoint = function (p) {
				return [p[0], p[1]];
			}
			gpcas.geometry.LineHelper.cloneLine = function (line) {
				var res = [];
				for (var i = 0; i < line.length; i++) {
					res[i] = [line[i][0], line[i][1]];
				}
				return res;
			}
			gpcas.geometry.LineHelper.addLineToLine = function (line1, line2) {
				for (var i = 0; i < line2.length; i++) {
					line1.push(clonePoint(line2[i]));
				}
			}
			gpcas.geometry.LineHelper.roundPoint = function (p) {
				p[0] = Math.round(p[0]);
				p[1] = Math.round(p[1]);
			}
			//---------------------------------------------------------------
//Checks for intersection of Segment if as_seg is true.
//Checks for intersection of Line if as_seg is false.
//Return intersection of Segment "AB" and Segment "EF" as a Point
//Return null if there is no intersection
//---------------------------------------------------------------
			gpcas.geometry.LineHelper.lineIntersectLine = function (A, B, E, F, as_seg) {
				if (as_seg == null) as_seg = true;
				var ip;
				var a1;
				var a2;
				var b1;
				var b2;
				var c1;
				var c2;
				a1 = B.y - A.y;
				b1 = A.x - B.x;
				c1 = B.x * A.y - A.x * B.y;
				a2 = F.y - E.y;
				b2 = E.x - F.x;
				c2 = F.x * E.y - E.x * F.y;
				var denom = a1 * b2 - a2 * b1;
				if (denom == 0) {
					return null;
				}
				ip = new Point();
				ip.x = (b1 * c2 - b2 * c1) / denom;
				ip.y = (a2 * c1 - a1 * c2) / denom;
				//---------------------------------------------------
				//Do checks to see if intersection to endpoints
				//distance is longer than actual Segments.
				//Return null if it is with any.
				//---------------------------------------------------
				if (as_seg) {
					if (Math.pow((ip.x - B.x) + (ip.y - B.y), 2) > Math.pow((A.x - B.x) + (A.y - B.y), 2)) {
						return null;
					}
					if (Math.pow((ip.x - A.x) + (ip.y - A.y), 2) > Math.pow((A.x - B.x) + (A.y - B.y), 2)) {
						return null;
					}
					if (Math.pow((ip.x - F.x) + (ip.y - F.y), 2) > Math.pow((E.x - F.x) + (E.y - F.y), 2)) {
						return null;
					}
					if (Math.pow((ip.x - E.x) + (ip.y - E.y), 2) > Math.pow((E.x - F.x) + (E.y - F.y), 2)) {
						return null;
					}
				}
				return new Point(Math.round(ip.x), Math.round(ip.y));
			}
		};
		lineHelper()
		//////////////  LineIntersection  ///////////////////////
		gpcas.geometry.LineIntersection = function () {
		};
		gpcas.geometry.LineIntersection.iteratePoints = function (points, s1, s2, e1, e2) {
			var direction = true;
			var pl = points.length;
			var s1Ind = points.indexOf(s1);
			var s2Ind = points.indexOf(s2);
			var start = s1Ind;
			if (s2Ind > s1Ind) direction = false;
			var newPoints = [];
			var point;
			if (direction) {
				for (var i = 0; i < pl; i++) {
					point = (i + start < pl) ? points[i + start] : points[i + start - pl];
					newPoints.push(point);
					if ((equals(point, e1)) || (equals(point, e2))) {
						break;
					}
				}
			} else {
				for (var i = pl; i >= 0; i--) {
					point = (i + start < pl) ? points[i + start] : points[i + start - pl];
					newPoints.push(point);
					if ((equals(point, e1)) || (equals(point, e2))) {
						break;
					}
				}
			}
			return newPoints;
		}
		gpcas.geometry.LineIntersection.intersectPoly = function (poly, line /* of Points */) {
			var res = [];
			var numPoints = poly.getNumPoints();
			//points
			var ip;
			var p1;
			var p2;
			var p3;
			var p4;
			var firstIntersection = null;
			var lastIntersection = null;
			var firstIntersectionLineIndex = -1;
			var lastIntersectionLineIndex = -1;
			var firstFound = false;
			for (var i = 1; i < line.length; i++) {
				p1 = line[i - 1];
				p2 = line[i];
				var maxDist = 0;
				var minDist = Number.MAX_VALUE;
				var dist = -1;
				for (var j = 0; j < numPoints; j++) {
					p3 = poly.getPoint(j == 0 ? numPoints - 1 : j - 1);
					p4 = poly.getPoint(j);
					if ((ip = LineHelper.lineIntersectLine(p1, p2, p3, p4)) != null) {
						dist = Point.distance(ip, p2);
						if ((dist > maxDist) && (!firstFound)) {
							maxDist = dist;
							firstIntersection = new IntersectionPoint(p3, p4, ip);
							firstIntersectionLineIndex = i;
						}
						if (dist < minDist) {
							minDist = dist;
							lastIntersection = new IntersectionPoint(p3, p4, ip);
							lastIntersectionLineIndex = i - 1;
						}
					}
				}
				firstFound = (firstIntersection != null);
			}
			/*
			 Alert.show(firstIntersection.toString());
			 Alert.show(lastIntersection.toString());*/
			if ((firstIntersection != null) && (lastIntersection != null)) {
				var newLine /* of Point */ = [];
				newLine[0] = firstIntersection.intersectionPoint;
				var j = 1;
				for (var i = firstIntersectionLineIndex; i <= lastIntersectionLineIndex; i++) {
					newLine[j++] = line[i];
				}
				newLine[newLine.length - 1] = lastIntersection.intersectionPoint;
				if (
						(
						(equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint1)) &&
						(equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint2))
						) ||
						(
						(equals(firstIntersection.polygonPoint1, lastIntersection.polygonPoint2)) &&
						(equals(firstIntersection.polygonPoint2, lastIntersection.polygonPoint1))
						)
				) {
					var poly1 = new PolySimple();
					poly1.add(newLine);
					var finPoly1 = poly.intersection(poly1);
					var finPoly2 = poly.xor(poly1);
					if ((checkPoly(finPoly1)) && (checkPoly(finPoly2))) {
						return [finPoly1, finPoly2];
					}
				} else {
					var points1 = iteratePoints(poly.getPoints(), firstIntersection.polygonPoint1, firstIntersection.polygonPoint2, lastIntersection.polygonPoint1, lastIntersection.polygonPoint2);
					points1 = points1.concat(newLine.reverse());
					var points2 = iteratePoints(poly.getPoints(), firstIntersection.polygonPoint2, firstIntersection.polygonPoint1, lastIntersection.polygonPoint1, lastIntersection.polygonPoint2);
					points2 = points2.concat(newLine);
					var poly1 = new PolySimple();
					poly1.add(points1);
					var poly2 = new PolySimple();
					poly2.add(points2);
					var finPoly1 = poly.intersection(poly1);
					var finPoly2 = poly.intersection(poly2);
					if ((checkPoly(finPoly1)) && (checkPoly(finPoly2))) {
						return [finPoly1, finPoly2];
					}
				}
			}
			return null;
		}
		gpcas.geometry.LineIntersection.checkPoly = function (poly) {
			var noHoles = 0;
			for (var i = 0; i < poly.getNumInnerPoly(); i++) {
				var innerPoly = poly.getInnerPoly(i);
				if (innerPoly.isHole()) {
					return false;
				} else {
					noHoles++;
				}
				if (noHoles > 1) return false;
			}
			return true;
		}
	};
	line()
};lines()
function lmt() {
	///////////  LmtNode //////////////////////////
	gpcas.geometry.LmtNode = function (yvalue) {
		this.y = yvalue;
		/* Y coordinate at local minimum     */
		this.first_bound;
		/* Pointer to bound list             */
		this.next;
		/* Pointer to next local minimum     */
	};
////////////// LmtTable ///////////////
	gpcas.geometry.LmtTable = function () {
		this.top_node;
	};
	gpcas.geometry.LmtTable.prototype.print = function () {
		var n = 0;
		var lmt = this.top_node;
		while (lmt != null) {
			//console.log("lmt("+n+")");
			for (var edge = lmt.first_bound; (edge != null); edge = edge.next_bound) {
				//console.log("edge.vertex.x="+edge.vertex.x+"  edge.vertex.y="+edge.vertex.y);
			}
			n++;
			lmt = lmt.next;
		}
	}
};lmt()
function opTy() {
/////////////   OperationType //////////////////////////////////
	gpcas.geometry.OperationType = function (type) {
		this.m_Type = type;
	}
	gpcas.geometry.OperationType.GPC_DIFF = new gpcas.geometry.OperationType("Difference");
	gpcas.geometry.OperationType.GPC_INT = new gpcas.geometry.OperationType("Intersection");
	gpcas.geometry.OperationType.GPC_XOR = new gpcas.geometry.OperationType("Exclusive or");
	gpcas.geometry.OperationType.GPC_UNION = new gpcas.geometry.OperationType("Union");
};opTy()

 