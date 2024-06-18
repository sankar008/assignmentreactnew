import React from "react";

import Table from "./Table";
import * as API from "../Api/index";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
const Container = ({ setIsLogin }) => {
  const [sellerCont, setSellerCont] = useState([]);
  const [buyerCount, setBuyerCount] = useState([]);
  const [manufact, setManufact] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <div class="page-heading">
        <h3>DashBoard</h3>
      </div>
      <div class="page-content">
        <div class="row dashBoardCard">
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-3 py-4-5">
                <div class="row">
                  <div class="col-md-4">
                    <div class="stats-icon purple">
                      <i class="iconly-boldShow"></i>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-muted font-semibold">Total User</h6>
                    <h6 class="font-extrabold mb-0">53453</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-3 py-4-5">
                <div class="row">
                  <div class="col-md-4">
                    <div class="stats-icon blue">
                      <i class="iconly-boldProfile"></i>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-muted font-semibold">test</h6>
                    <h6 class="font-extrabold mb-0">00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-3 py-4-5">
                <div class="row">
                  <div class="col-md-4">
                    <div class="stats-icon red">
                      <i class="iconly-boldBookmark"></i>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-muted font-semibold">test </h6>
                    <h6 class="font-extrabold mb-0">00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-3 py-4-5">
                <div class="row">
                  <div class="col-md-4">
                    <div class="stats-icon green">
                      <i class="iconly-boldAdd-User"></i>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <h6 class="text-muted font-semibold">test</h6>
                    <h6 class="font-extrabold mb-0">.00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </>
  );
};

export default Container;
