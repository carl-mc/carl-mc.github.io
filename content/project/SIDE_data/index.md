---
title: Spatially Interpolated Data on Ethnicity
summary: Collection of 253 near-continuous maps of local ethno-linguistic, religious, and ethno-religious settlement patterns in 47 countries.
tags:
- Data
date: "2018-04-01"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Administrative units in 2017
  focal_point: Smart

links:
#- icon: twitter
#  icon_pack: fab
#  name: Follow
#  url: https://twitter.com/georgecushen
url_pdf: 'publication/SDIE_data/SIDE_Data_main'
url_code: 'https://github.com/carl-mc/sidedata'
url_dataset: 'https://side.ethz.ch'
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

### Description

The Spatially Interpolated Data on Ethnicity (SIDE) dataset is a collection of 253 near-continuous maps of local ethno-linguistic, religious, and ethno-religious settlement patterns in 47 low- and middle-income countries. These data are a generalization of ethnicity-related information in the geo-coded Demographic and Health Surveys (DHS). Many DHS surveys are geo-coded, thus providing a set of spatial sampling points containing local ethnic composition estimates. We use methods from geo-statistics and machine learning to estimate the ethnic composition of areas in between these sampling points to produce a continuous map of ethnic compositions for each surveyed country.

Please refer to [this article](https://journals.sagepub.com/doi/full/10.1177/0022343318764254) for all details.

### Limitations
Please note the following, important limitations of the data. First, DHS sampling may be not always be representative due to social phenomena, such as political violence. Although there is no systematic evidence of this, the data might in some cases be affected by local sampling bias. Second, even though for many countries SIDE covers multiple years, we caution against relying on this temporal variation for inferential purposes. Due to variation in the sampling and coding of the DHS, a substantial share of intertemporal variance in the SIDE data is random noise. Third, although the SIDE data are provided as high-resolution rasters, very local variation in the data may not be meaningful. This depends on the imputation parameters, the local density of the DHS data, and their random displacement of up to 2km (10km) in urban (rural) areas.
Given these limitations, we encourage the use of SIDE for cross-national analyses that require consistent, cross-national data on local ethnic demographies, rather than single-country studies that rely on high-precision data.

### Data and code
We provide the data for download at [http://side.ethz.ch](http://side.ethz.ch) and as a R-package on [https://github.com/carl-mc/sidedata](https://github.com/carl-mc/sidedata).

### Citation
When using this dataset in your research, please include the following reference:

Müller-Crepon, Carl & Philipp Hunziker. (2018). New Spatial Data on Ethnicity: Introducing SIDE. _Journal of Peace Research, 55_(5), 687–698. 