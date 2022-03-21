---
title: "Accurate calibration of multi-perspective cameras from a generalization of the hand-eye constraint"
author: "Kun Huang, <b>Yifu Wang</b>, Laurent Kneip."
collection: publications
permalink: /test
excerpt: 
date: 2021-05-23
venue: European Conference on Computer Vision
paperurl: https://arxiv.org/abs/2202.00886
citation: 
youtubeId: 
#header:
#   teaser: cvpr2019_t.jpg
---

<a href="https://1fwang.github.io/files/cvpr2019.pdf" target="_blank"><b>[PDF]</b></a>&emsp;
<a href="https://1fwang.github.io/files/huang2019motion.txt" target="_blank"><b>[BibTex]</b></a>

![firenet_banner](/images/cvpr2019.jpg){:class="img-responsive"}

<b>Abstract.</b> 
The planar motion of ground vehicles is often non-holonomic, which enables a solution of the two-view relative pose problem from a single point feature correspondence. Man-made environments such as underground parking lots are however dominated by line features. Inspired by the planar tri-focal tensor and its ability to handle lines, we establish an n-linear constraint on the locally circular motion of non-holonomic vehicles able to handle an arbitrarily large and dense window of views. We prove that this stays a uni-variate problem under the assumption of locally constant vehicle speed, and it can transparently handle both point and vertical line correspondences. In particular, we prove that an application of Viete's formulas for extrapolating trigonometric functions of angle multiples and the Weierstrass substitution casts the problem as one that merely seeks the roots of a uni-variate polynomial. We present the complete theory of this novel solver, and test it on both simulated and real data. Our results prove that it successfully handles a variety of relevant scenarios, eventually outperforming the 1-point two-view solver.

<b>Reference:</b>
* Huang, K., Wang, Y. and Kneip, L., 2019. Motion estimation of non-holonomic ground vehicles from a single feature correspondence measured over n views. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (pp. 12706-12715).
