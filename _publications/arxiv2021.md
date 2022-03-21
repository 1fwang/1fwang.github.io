---
title: "Visual Odometry with an Event Camera Using Continuous Ray Warping and Volumetric Contrast Maximization"
author: "<b>Yifu Wang</b>, Jiaqi Yang, Xin Peng, Peng Wu, Ling Gao, Kun Huang, Jiaben Chen, Laurent Kneip."
collection: publications
permalink: /arxiv2021
excerpt: 
date: 2021-07-07
venue: Arxiv paper
paperurl: https://arxiv.org/abs/2107.03011
citation: 
youtubeId: 
#header:
#   teaser: arxiv2021_t.jpg
---

<a href="https://1fwang.github.io/files/arxiv2021.pdf" target="_blank"><b>[PDF]</b></a>&emsp;
<a href="https://1fwang.github.io/files/wang2021visual.txt" target="_blank"><b>[BibTex]</b></a>

![firenet_banner](/images/arxiv2021.jpg){:class="img-responsive"}

<b>Abstract.</b> 
We present a new solution to tracking and mapping with an event camera. The motion of the camera contains both rotation and translation, and the displacements happen in an arbitrarily structured environment. As a result, the image matching may no longer be represented by a low-dimensional homographic warping, thus complicating an application of the commonly used Image of Warped Events (IWE). We introduce a new solution to this problem by performing contrast maximization in 3D. The 3D location of the rays cast for each event is smoothly varied as a function of a continuous-time motion parametrization, and the optimal parameters are found by maximizing the contrast in a volumetric ray density field. Our method thus performs joint optimization over motion and structure. The practical validity of our approach is supported by an application to AGV motion estimation and 3D reconstruction with a single vehicle-mounted event camera. The method approaches the performance obtained with regular cameras, and eventually outperforms in challenging visual conditions.

<b>Reference:</b>
* Wang, Y., Yang, J., Peng, X., Wu, P., Gao, L., Huang, K., Chen, J. and Kneip, L., 2021. Visual odometry with an event camera using continuous ray warping and volumetric contrast maximization. arXiv preprint arXiv:2107.03011.
