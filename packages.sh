#!/bin/bash
dpkg-deb -bZgzip projects/plutOS debs
dpkg-deb -bZgzip projects/acOS debs
dpkg-deb -bZgzip projects/miOS debs
dpkg-deb -bZgzip projects/boOS debs
dpkg-deb -bZgzip projects/tesOS debs
dpkg-deb -bZgzip projects/herOS debs
dpkg-deb -bZgzip projects/jOS debs
